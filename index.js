import express from 'express'
import { connectionDB } from './DB/connection.js'
const app = express()
import { config } from 'dotenv'
import path from 'path'
config({path: path.resolve('./config/.env')})
import colors from 'colors'

const port = process.env.PORT 

connectionDB()

app.use(express.json())

app.get('/', (req, res) => res.send(`My School System Working`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`.rainbow)) 