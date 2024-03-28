import connectToDB from "@/configs/db";
import { verify } from "jsonwebtoken";
import userModel from "@/models/Userf";

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token is missing.");
  }
  return verify(token, process.env.privetkey);
};

const handler = async (req, res) => {
  try {
    await connectToDB();

    const { token } = req.body;

    const tokenPayload = verifyToken(token);

    const user = await userModel.findOne(
      {
        number: tokenPayload.number,
      },
      "name number role"
    );

    if (!user) {
      throw new Error("User not found.");
    }

    return res.status(200).json({ data: user });
  } catch (err) {
    console.error(err);
    const statusCode = err.message === "Token is missing." || err.message === "User not found." ? 401 : 500;
    const message = err.message || "Unknown Internal Server Error !!";
    return res.status(statusCode).json({ message });
  }
};

export default handler;
