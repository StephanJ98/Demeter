import express  from 'express'
import 'dotenv/config'
import cors from 'cors'
import routes from './routes.js'

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (_req, res) => {
    res.sendStatus(200)
})

routes(app)

app.listen(port, function () {
    console.log(`
    ##########################################
    # Dev server on http://localhost:${port}    #
    # -------------------------------------- #
    # Server started on port: ${port}           #
    ##########################################`)
})