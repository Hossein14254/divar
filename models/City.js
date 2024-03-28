import mongoose from 'mongoose';

let CityModel;

try {
  // چک می‌کنیم آیا مدل User قبلاً تعریف شده است یا خیر
  CityModel = mongoose.model('City');
} catch (e) {
  // اگر مدل User قبلاً تعریف نشده بود، آن را تعریف می‌کنیم
  const CitySchema = mongoose.Schema({
    city: {
      type: String,
      required: true,
    }
  }, { timestamps: true });
  

  CityModel = mongoose.model('City', CitySchema);
}

export default CityModel;
