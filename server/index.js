import express, { json, urlencoded } from 'express'
import { config } from 'dotenv'
import cors from 'cors'

import urlRoutes from './routes/urlRoutes.js'
import { redirectUrl } from './controllers/urlController.js'
import { errorHandler } from './utils/errorHandler.js'

config() // Load env variables

const app = express()
app.use(urlencoded({ extended: true }));
app.use(json())
app.use(cors())

app.use('/url', urlRoutes);

app.use('/*', redirectUrl)

app.use(errorHandler);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("CutLink")
  console.log("Server: Running")
  console.log(`PORT  : ${PORT}`)
});