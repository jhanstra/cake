import express from 'express'
import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser'

import { groupApi } from './server/routes'
import { url } from './config/db'

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(url, (err, client) => {
  const db = client.db('cake')
  if (err) return console.log(err)
  groupApi(app, db)

  app.listen(port, () => {
    console.log('server started on port ' + port)
  })
})

