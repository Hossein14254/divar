const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/divar')
  .then(() => {
    console.log('connected')
  })
  .catch(console.error)

let AgahiModel

const mongodata = mongoose.Schema({
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
  if (req.method === 'PUT') {
    const {_id,name,img,text,transfree,condition,pric} = req.body;
      console.log({_id,name,img,text,transfree,condition,pric} )
    try {
      if (!AgahiModel) {
        AgahiModel = mongoose.models.Agahi || mongoose.model('Agahi', mongodata)
      }

      const updatedAgahi = await AgahiModel.updateOne(
        { _id: _id },
        { name: name, img: img, transfree: transfree, condition: condition, text: text, pric: pric }
      );
            
      res.json(updatedAgahi)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
