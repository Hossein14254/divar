import mongoose from "mongoose";
import connectToDB from "@/configs/db";
import UserModel from "@/models/Userf";

const handler =async (req,res)=>{
    if(req.method==="GET"){
        try{
            await connectToDB();
    
            const isrespans=await UserModel.find({})
            return res.status(201)
            .json({ message:  isrespans})
        } catch (err) {
            return res.status(422).json({ message: 'Internal server error' })
          }
    }else if(req.method==="DELETE"){
        try {
            await connectToDB();
            const userId = req.body._id;
            await UserModel.deleteMany({ _id: userId });
            const updatedUsers = await UserModel.find({});
            res.status(200).json(updatedUsers);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }else{
        return 0;
    }

}
export default handler
