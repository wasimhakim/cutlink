import express, { json } from 'express'
import { config } from 'dotenv'

config() // Load env variables

const app = express()
app.use(json()) // Parse json requests

// root
app.use('/', (req, res) => {
  res.send("CutLink is live!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("CutLink")
  console.log("Server: Running")
  console.log(`PORT  : ${PORT}`)
});