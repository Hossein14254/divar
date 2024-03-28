import DasteModel from '@/models/Daste';
import connectToDB from '@/configs/db';

const handler = async (req, res) => {
    if(req.method!=="POST"){
        return 0;
    }
  try {
    await connectToDB(); // انتظار اتصال به پایگاه داده
    const { daste } = req.body;

    // بررسی خالی نبودن
    if (!daste.trim()) {
      return res.status(400).json({ message: 'دسته باید پر باشد' });
    }

    // بررسی قبل استفاده نشدن 
    const isDasteExist = await DasteModel.exists({ daste });

    if (isDasteExist) {
      return res.status(409).json({ message: 'دسته با این نام از قبل وجود دارد' });
    }

    // ایجاد دسته
    await DasteModel.create({ daste });
    console.log("دسته: " + daste);

    return res.status(201).json({ message: 'دسته جدید با موفقیت ایجاد شد', daste });
  } catch (err) {
    console.error("خطای داخلی سرور: ", err);
    return res.status(500).json({ message: 'خطای داخلی سرور' });
  }
};

export default handler;
