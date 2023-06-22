import mongodb from "mongodb"

const { ObjectId } = mongodb;

let reviews

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db("retl").collection("reviews")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addReview(emperorId, user, review, rating){
        console.log(reviews)
        try {
            const reviewDoc = {
                emperorId: emperorId,
                user: user,
                review: review,
                rating: rating,
            }
            console.log("adding")
            return await reviews.insertOne(reviewDoc)
        } catch (e) {
            console.error(`Unable to post review: ${e}`)
            return { error: e }
        }
    }

    static async getReview(reviewId) {
        try {
            return await reviews.findOne({ _id: new ObjectId(reviewId) })
        } catch (e) {
            console.error(`Unable to get review: ${e}`)
            return { error: e }
        }
    }

    static async updateReview(reviewId, user, review, rating) {
        console.log(reviewId)
        try {
            const updateResponse = await reviews.updateOne(
                { _id: new ObjectId(reviewId) },
                { $set: { user: user, review: review, rating: rating } }
            )

            return updateResponse
        } catch (e) {
            console.error(`Unable to update review: ${e}`)
            return { error: e }
        }
    }

    static async deleteReview(reviewId) {

        try {
            return await reviews.deleteOne({
                _id: new ObjectId(reviewId),
            })
        } catch (e) {
            console.error(`Unable to delete review: ${e}`)
            return { error: e }
        }
    }

    static async getReviewsByEmperorId(emperorId) {
        try {
            const cursor = await reviews.find({ emperorId: parseInt(emperorId) })
            return cursor.toArray()
        } catch (e) {
            console.error(`Unable to get review: ${e}`)
            return { error: e }
        }
    }

}