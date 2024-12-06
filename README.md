const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI || 'your-mongodb-uri';  // ใช้ Environment Variables ใน Railway
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const gpsSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  timestamp: { type: Date, default: Date.now }
});
const GPSData = mongoose.model('GPSData', gpsSchema);

app.use(bodyParser.json());

app.post('/api/gps', async (req, res) => {
  const { latitude, longitude } = req.body;
  const gpsData = new GPSData({ latitude, longitude });
  await gpsData.save();
  res.status(200).send('Data received and saved');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
