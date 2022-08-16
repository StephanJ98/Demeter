import { MongoClient, ObjectID } from 'mongodb'

let cachedDb = null

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

async function connectToDatabase(uri) {
    if (cachedDb) {
        return cachedDb
    }
    const client = await MongoClient.connect(uri, mongodbOptions)
    const db = await client.db(new URL(uri).pathname.substring(1))
    cachedDb = db
    return db
}

export default function (app) {

    /** Login Routes */
    app.get("/login/:email", async (req, res) => {
        let email = req.params.email

        try {
            const cluster = await connectToDatabase(process.env.MONGODB_URI)
            await cluster.collection('users').find({ email: email }, {
                projection: {
                    _id: 0,
                    email: 1,
                    pass: 1
                }
            }).toArray((err, result) => {
                if (err) res.sendStatus(400)
                if (result.length === 0) res.sendStatus(281) /* No existe el usuario con ese email*/
                else res.json({ pass: result[0].pass })
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })


    /** Register Routes */
    app.post("/register", async (req, res) => {
        let email = req.body.email
        let pass = req.body.pass

        try {
            const cluster = await connectToDatabase(process.env.MONGODB_URI)
            const db = await cluster.collection('users').find({ email: email }, {
                projection: {
                    email: 0
                }
            }).toArray()

            if (db.length > 0) res.sendStatus(280)
            else if (email && pass) {
                await cluster.collection('users').insertOne({
                    email: req.body.email,
                    pass: req.body.pass
                })
                res.sendStatus(200)
            } else res.sendStatus(400)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })


    /** Main Routes */


}