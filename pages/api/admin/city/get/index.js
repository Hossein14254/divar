const mongo = require('mongoose')
import CityModel from '@/models/City'
import connectToDB from '@/configs/db'
export default async function handler(req, res) {

  await connectToDB()
  if (req.method === 'GET') {
    try {
      const City = await CityModel.find()
      res.json(City)
      } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
      }
    }else if(req.method==="DELETE"){
      try {
        await connectToDB();
        const cityId = req.body._id;
        await CityModel.deleteMany({ _id: cityId });
        const up = await CityModel.find({});
        res.status(200).json(up);
      } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
    }else if(req.method==="PUT"){
      try {
        await connectToDB();
        const { cityId, city } = req.body;
        console.log(cityId,city)
        await CityModel.updateOne({ _id: cityId }, { city: city });
        const up = await CityModel.find({});
        res.status(200).json(up);        
      } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }} else {
        res.status(405).json({ error: 'Method Not Allowed' })
      }
    
  }
    