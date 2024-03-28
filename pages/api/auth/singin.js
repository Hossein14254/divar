import userModel from "@/models/Userf";
import connectToDB from "@/configs/db";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { compare } from "bcrypt";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectToDB();

    const { identifier, password } = req.body;

    if (!identifier.trim() || !password.trim()) {
      return res.status(422).json({ message: "Data is not valid !!" });
    }

    const user = await userModel.findOne({
      $or: [{ number: identifier }],
    });

    if (!user) {
      return res.status(404).json({ message: "User or password not found !!" });
    }

    const isvalid = await compare(password, user.password);

    if (!isvalid) {
      return res
        .status(404)
        .json({ message: "User or password not found !! " });
    }

    const token = jsonwebtoken.sign(
      { number: user.number },
      process.env.privetkey,
      {
        algorithm: "HS256",
        expiresIn: "72h",
      }
    );

    // Send token as a response body
    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
