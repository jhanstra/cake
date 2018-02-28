import { ObjectId } from 'mongodb'

const groupApi = (app, db) => {
  const group = db.collection('group')

  app.get('/group/:id', (req, res) => {
    const id = { _id: new ObjectId(req.params.id) }
    groups.findOne(id, (err, item) => {
      if (err) { res.send({ 'error': 'an error occurred' }) }
      else { res.send(item) }
    })
  })

  app.post('/group', (req, res) => {
    const groupJson = {
      name: req.body.name,
      body: req.body.body,
    }
    groups.insert(groupJson, (err, result) => {
      if (err) { res.send({ 'error': 'an error occurred' }) }
      else { res.send(result.ops[0]) }
    })
  })

  app.delete('/group/:id', (req, res) => {
    const _id = { '_id': new ObjectID(req.params.id) }
    groups.remove(id, (err, item) => {
      if (err) { res.send({ 'error': 'an error has occurred' }) }
      else { res.send(`group ${id} deleted`) }
    })
  })

  app.put('/group/:id', (req, res) => {
    const id = { '_id': new ObjectID(req.params.id) }
    const groupJson = {
      body: req.body.body,
      title: req.body.title
    }
    groups.update(id, group, (err, result) => {
      if (err) { res.send({ 'error': 'an error has occurred' }) }
      else { res.send(group) }
    })
  })
}

export {
  groupApi
}