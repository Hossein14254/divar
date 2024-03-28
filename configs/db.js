import mongoose from 'mongoose';

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    await mongoose.connect("mongodb://localhost:27017/divar", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('Database connection error');
  }
};

// اولین فراخوانی برای اتصال به پایگاه دادهس
connectToDB();

export default connectToDB;
