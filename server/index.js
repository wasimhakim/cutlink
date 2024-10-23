import express, { json } from 'express'
import { config } from 'dotenv'

import urlRoutes from './routes/urlRoutes.js'

config() // Load env variables

const app = express()
app.use(json()) // Parse json requests

app.use('/url', urlRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("CutLink")
  console.log("Server: Running")
  console.log(`PORT  : ${PORT}`)
});