from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

 

try:
    client = MongoClient('mongodb://localhost:27017/')
    db = client['retl']
except ConnectionFailure:
    print("Failed to connect to MongoDB.")

 

with client.start_session() as session:
    with session.start_transaction():
        try:
            collection = db['user_input']

            collection.insert_one({"rating": 1, "comment": "toll!", "user_id": 1, "emp_id": 1})
            collection.insert_one({"rating": 1, "comment": "toll!", "user_id": 2, "emp_id": 1})
            collection.update_one({"user_id": 2}, {"$set": {"rating": 9}})

            session.commit_transaction()
            print("Transaction committed successfully.")
        except Exception as e:
            print("Transaction aborted:", str(e))