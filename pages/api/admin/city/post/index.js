import connectToDB from '@/configs/db';
import CityModel from '@/models/City';
const handler = async (req, res) => {
    if(req.method!=="POST"){
        return 0;
    }
  try {
    await connectToDB(); // انتظار اتصال به پایگاه داده
    const { city } = req.body;

    // بررسی خالی نبودن
    if (!city.trim()) {
      return res.status(400).json({ message: 'شهر باید پر باشد' });
    }

    // بررسی قبل استفاده نشدن 
    const iscityExist = await CityModel.exists({ city });

    if (iscityExist) {
      return res.status(409).json({ message: 'شهر با این نام از قبل وجود دارد' });
    }

    // ایجاد دسته
    await CityModel.create({ city });
    console.log("شهر: " + city);

    return res.status(201).json({ message: 'شهر جدید با موفقیت ایجاد شد', city });
  } catch (err) {
    console.error("خطای داخلی سرور: ", err);
    return res.status(500).json({ message: 'خطای داخلی سرور' });
  }
};

export default handler;
