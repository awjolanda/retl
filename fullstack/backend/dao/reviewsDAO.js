import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO {
    static async injectDB(conn) {
        if(reviews){
            return
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        } catch (e) {
            console.error(`DAO${e}`)
            return {error: e}
        }
    }
    static async addReview(emperorID, user, review, rating){
        try {
            const reviewDoc = {
                emperorID: emperorID,
                user: user,
                review: review,
                rating: rating,
            }
            return await reviews.insertOne(reviewDoc)
        } catch (e) {
            console.error(`Error to post ${e}`)
            return {error: e}
        }
    }

    static async getReview(reviewID){
        try {
            return await reviews.findOne({_id: ObjectId(reviewID)})
        } catch (e) {
            console.error(`Error to get review ${e}`)
            return {error: e}
        }
    }

    static async updateReview(reviewID, user, review, rating){
        try {
            const updateResponse = await reviews.updateOne(
                {_id: ObjectId(reviewID)},
                {$set: {user:user, review:review, rating:rating}}
            )

            return updateResponse
        } catch (e) {
            console.error(`Error to update ${e}`)
            return {error: e}
        }
    }

    static async deleteReview(reviewID) {
        try {
            const deleteResponse = await reviews.deleteOne({
                _id: ObjectId(reviewID)
            })

            return deleteResponse
        } catch (e) {
            console.error(`Error to delete ${e}`)
            return {error: e}
        }
    }
    static async getReviewByEmperorID(emperorId){
        try {
            const cursor = await  reviews.find({
                emperorId: parseInt(emperorId)
            })
            return cursor.toArray()
        } catch (e) {
            console.error(`Error to get reviews ${e}`)
            return {error: e}
        }
    }


}