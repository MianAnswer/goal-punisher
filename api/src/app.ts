import express from 'express'
import config from './config'
import connectDB from './db'
import router from './endpoints'

const { host, port } = config.server

const app = express()

app.use('/', router)
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  const db = connectDB()
  process.on('beforeExit', () => { db.close() })
  console.log(`Listening to http://${host}:${port}`)
})
