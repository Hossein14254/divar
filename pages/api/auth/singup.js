import usermodel from '@/models/Userf'
import connectToDB from '@/configs/db'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { serialize } from 'cookie'
const handler = async (req, res) => {
  try {
    await connectToDB() // انتظار اتصال به پایگاه داده
    const { name, number, password } = req.body
    // بررسی خالی نبودن
    if (!name.trim() || !number.trim() || !password.trim()) {
      return res.status(422).json({ message: 'not trim' })
    }

    // بررسی قبل استفاده نشدن شماره
    const isUserExist = await usermodel.findOne({
      number: number,
    })

    if (isUserExist) {
      return res.status(423).json({ message: 'user already exists' })
    }

    // تبدیل رمز به رمز پیشرفته
    const hashPassword = await bcrypt.hash(password, 10)

    // ساخت توکن
    const token = jsonwebtoken.sign({ number: number }, process.env.privetkey, {
      algorithm: 'HS256',
      expiresIn: '72Hours',
    })

    const users = await usermodel.find({})

    // ایجاد کاربر
    await usermodel.create({
      name: name,
      number: number,
      password: hashPassword,
      role: users.length > 0 ? 'USER' : 'ADMIN',
    })
    // ذخیره توکن در لوکال هاست
    return res
      .setHeader(
        'Set-Cookie',
        serialize('token', token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 3,
        }),
      )
      .status(201)
      .json({ message: 'new user :)', token })
  } catch (err) {
    // برای مشاهده خطا درخواست آن را کامنت کرده‌ام.
    return res.status(422).json({ message: 'Internal server error' })
  }
}

export default handler
