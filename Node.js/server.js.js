// เพิ่มการติดตั้ง dependencies ในไฟล์ package.json
const mongoose = require('mongoose');
require('dotenv').config();  // ใช้ dotenv เพื่อดึงข้อมูลจากไฟล์ .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();
