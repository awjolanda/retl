const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Connect to the MongoDB server
client.connect(err => {
  if (err) throw err;

  // Select the database and collection to work with
  const db = client.db("retl");
  const collection = db.collection("emperors");

  // Define the data as a valid JSON object
  const data = {
    "index": 3,
    "name": "Caligula",
    "name_full": "GAIVS IVLIVS CAESAR AVGVSTVS GERMANICVS",
    "birth": "12-08-31",
    "death": "41-01-24",
    "birth_cty": "Antitum",
    "birth_prv": "Italia",
    "rise": "Birthright",
    "reign_start": "37-03-18",
    "reign_end": "41-01-24",
    "cause": "Assassination",
    "killer": "Senate",
    "dynasty": "Julio-Claudian",
    "era": "Principate",
    "notes": "assassination may have only involved the Praetorian Guard",
    "verif_who": "Reddit user zonination",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Caligula_Rekonstruktion_Polychromie_(cropped).JPG"
  };

  // Insert the data into the collection
  collection.insertOne(data, (err, res) => {
    if (err) throw err;
    console.log("Data inserted");
    client.close();
  });
});
