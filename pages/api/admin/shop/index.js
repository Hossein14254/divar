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

  if (req.method === 'POST') {
    try {
        const id = req.body.id;
        console.log('Received idagahi:', id);
        const agahis = await AgahiModel.find({ _id: id });
        res.json({res:agahis});
    } catch (error) {
        console.error('Error while fetching agahis:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

}
