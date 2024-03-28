const mongo = require('mongoose')

mongo
  .connect('mongodb://localhost:27017/divar')
  .then(() => {
    console.log('connected')
  })
  .catch(console.error)

let AgahiModel

const mongodata = mongo.Schema({
  name: { type: String, required: true },
  daste: { type: String },
  pric: { type: String },
  city: { type: String },
  condition: { type: String },
  transfree: { type: String },
  text: { type: String },
  num: { type: String },
  img: { type: String },
})

export default async function handler(req, res) {
  if (!AgahiModel) {
    AgahiModel = mongo.models.Agahi || mongo.model('Agahi', mongodata)
  }

  if (req.method === 'GET') {
    try {
      const agahis = await AgahiModel.find()
      res.json(agahis)
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
