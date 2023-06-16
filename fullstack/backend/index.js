import app from "./server.js"
import mongodb from "mongodb"
// import Emperor from "./dao/emperors.js"

const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://Gerg:U0kZaRnOjgI1YfvA@cluster0.px65fl2.mongodb.net/?retryWrites=true&w=majority"

const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS:2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client =>{
    app.listen(port, () => {
        console.log(port)
    })
})