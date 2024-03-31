import mongoose from 'mongoose'
import connectToDB from '@/configs/db'



const agahiSchema = mongoose.Schema({
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

const Agahi = mongoose.model('agahi', agahiSchema)
0

export default async function handler(req, res) {
  if (req.method === 'POST') {
    connectToDB()

    try {
      const { name, daste, pric, city, condition, transfree, text, num, img } =
        req.body

      const newAgahi = new Agahi({
        name,
        daste,
        pric,
        city,
        condition,
        transfree,
        text,
        num,
        img,
      })
      await newAgahi.save()

      res.status(201).json({ message: 'Agahi created successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}

