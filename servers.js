const express = require('express');
const mongoose = require('mongoose');
const newsRoutes = require('./routes/news');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB bilan ulanish
mongoose.connect('mongodb://localhost:27017/newsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDBga ulanish amalga oshirildi'))
    .catch(err => console.error('MongoDBga ulanishda xatolik:', err));

// Yangiliklar routelarini ulash
app.use('/api/news', newsRoutes);

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portida ishga tushdi`));
