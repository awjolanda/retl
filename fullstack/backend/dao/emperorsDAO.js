import mongodb from "mongodb"

let emperors

export default class EmperorsDAO {
    static async injectDB(conn) {
        if (emperors) {
            return
        }
        try {
            emperors = await conn.db("retl").collection("emperors")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async getEmperor(index) {
        try {
            const cursor = await emperors.find({ index: parseInt(index) })
            return cursor.toArray()
        } catch (e) {
            console.error(`Unable to get review: ${e}`)
            return { error: e }
        }
    }

    static async getAllEmperor() {
        try {
            console.log(emperors)
            const cursor = await emperors.find()
            return cursor.toArray()
        } catch (e) {
            console.error(`Unable to get review: ${e}`)
            return { error: e }
        }
    }

}