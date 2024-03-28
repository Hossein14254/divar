import mongoose from "mongoose";
import connectToDB from "@/configs/db";
import CommentsModel from "@/models/Comments";

const handler = async (req, res) => {
    connectToDB();
    try {
        if (req.method === 'GET') {
            const comments = await CommentsModel.find({},{__v:0,updatedAt:0,}).populate('iduser')
            res.status(200).json({ data:comments });
        } else if (req.method === 'POST') {


            const { iduser, comment, idagahi } = req.body;
            await CommentsModel.create({ comment, iduser, idagahi });
            
            res.status(201).json({ message: 'نظر شما با موفقیت ثبت شد!' });
        }else if(req.method==="DELETE"){
            try {
              await connectToDB();
              const cityId = req.body._id;
              await CommentsModel.deleteMany({ _id: cityId });
              const up = await CommentsModel.find({});
              res.status(200).json(up);
          } catch (err) {
              return res.status(500).json({ message: 'Internal server error' });
          }}
         else {
            res.status(405).json({ message: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(422).json({ message: 'خطا در سرور' });
    }
}

export default handler;
