const mongo = require('mongoose')
import DasteModel from '@/models/Daste'
import connectToDB from '@/configs/db'
export default async function handler(req, res) {
  if (req.method === 'GET') {
      await connectToDB()
      try {
        const Daste = await DasteModel.find()
        res.json(Daste)
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
      }
    }else if(req.method==="DELETE"){
      try {
        await connectToDB();
        const userId = req.body._id;
        await DasteModel.deleteMany({ _id: userId });
        const updated = await DasteModel.find({});
        res.status(200).json(updated);
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
    } else if(req.method==="PUT"){
      try {
        await connectToDB();
        const { cityId, city } = req.body;
        console.log(cityId,city)
        await DasteModel.updateOne({ _id: cityId }, { daste: city });
        const up = await DasteModel.find({});
        res.status(200).json(up);        
      } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }}else {
      res.status(405).json({ error: 'Method Not Allowed' })
  }
}