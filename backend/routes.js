import { MongoClient, ObjectID } from 'mongodb'

let cachedDb = null

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

async function connectToDatabase(uri) {
    if (cachedDb) return cachedDb
    const client = await MongoClient.connect(uri, mongodbOptions)
    const db = await client.db(new URL(uri).pathname.substring(1))
    cachedDb = db
    return db
}

export default function (app) {
    /**Dev Routes */
    app.get("/dev", async (_, res) => {
        try {
            const cluster = await connectToDatabase(process.env.MONGODB_URI)
            await cluster.collection('users').find({}, { _id: 0, password: 0 }).toArray((err, result) => {
                if (err) res.sendStatus(400)
                if (result.length === 0) res.json({ message: "Todo OK pero no hay entrads en la DB." })
                else res.json({ users: result })
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })

    /** Login Routes */
    app.get("/login/:name", async (req, res) => {
        let name = req.params.name

        try {
            const cluster = await connectToDatabase(process.env.MONGODB_URI)
            await cluster.collection('users').find({ name: name }, {
                projection: {
                    _id: 0,
                    name: 1,
                    password: 1
                }
            }).toArray((err, result) => {
                if (err) res.sendStatus(400)
                if (result.length === 0) res.sendStatus(281) /* No existe el usuario con ese email*/
                else res.json({ password: result[0].password })
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })

    /** Register Routes */
    app.post("/register", async (req, res) => {
        let name = req.body.name
        let password = req.body.password

        try {
            const cluster = await connectToDatabase(process.env.MONGODB_URI)
            const db = await cluster.collection('users').find({ name: name }, {
                projection: {
                    name: 0
                }
            }).toArray()

            if (db.length > 0) res.sendStatus(280)
            else if (name && password) {
                await cluster.collection('users').insertOne({
                    name: req.body.name,
                    password: req.body.password
                })
                res.sendStatus(200)
            } else res.sendStatus(400)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    })

    /** Main Routes */


    /** ####################################################################################### **/
    /** Los ejercicios de Ruben */

    app.get("/ruben", (_, res) => {
        let abcd = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        let randomizeABCD = abcd.sort((a, b) => 0.5 - Math.random())
        res.json({ letras: randomizeABCD })
    })
}