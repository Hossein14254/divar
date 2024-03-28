import mongoose from 'mongoose';

let DasteModel;

try {
  // چک می‌کنیم آیا مدل User قبلاً تعریف شده است یا خیر
  DasteModel = mongoose.model('Daste');
} catch (e) {
  // اگر مدل User قبلاً تعریف نشده بود، آن را تعریف می‌کنیم
  const DasteSchema = mongoose.Schema({
    daste: {
      type: String,
      required: true,
    }
  }, { timestamps: true });
  

  DasteModel = mongoose.model('Daste', DasteSchema);
}

export default DasteModel;
