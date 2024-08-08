const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Yangiliklarni olish
router.get('/', newsController.getAllNews);

// Yangilik qo'shish
router.post('/', newsController.createNews);

// Yangilikni olish
router.get('/:id', newsController.getNewsById);

// Yangilikni yangilash
router.patch('/:id', newsController.updateNews);

// Yangilikni o'chirish
router.delete('/:id', newsController.deleteNews);

module.exports = router;
