const handler = async (req, res) => {
  try {
    const token = req.body; // بازیابی توکن از کوکی‌ها


    

    console.log("token", token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // ادامه فرآیند بررسی و اجرای کارهای مرتبط با توکن دریافتی

    res.status(200).json({ message: "Token received successfully", token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
