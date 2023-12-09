import express from 'express'
import config from 'config'
import router from './endpoints'

const { host, port }: { [key: string]: number } = config.get('api')

const app = express()

app.use('/', router)
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Listening to http://${host}:${port}`)
})
