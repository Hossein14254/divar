import mongoose from 'mongoose';

let UserModel;

try {
  // چک می‌کنیم آیا مدل User قبلاً تعریف شده است یا خیر
  UserModel = mongoose.model('User');
} catch (e) {
  // اگر مدل User قبلاً تعریف نشده بود، آن را تعریف می‌کنیم
  const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'User',
    },
  });

  UserModel = mongoose.model('User', userSchema);
}

export default UserModel;
