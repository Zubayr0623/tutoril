const News = require('../models/News');

// Yangiliklarni olish
exports.getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Yangilik qo'shish
exports.createNews = async (req, res) => {
    const news = new News({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    });

    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Yangilikni olish
exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (news == null) {
            return res.status(404).json({ message: 'Yangilik topilmadi' });
        }
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Yangilikni yangilash
exports.updateNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (news == null) {
            return res.status(404).json({ message: 'Yangilik topilmadi' });
        }

        if (req.body.title != null) {
            news.title = req.body.title;
        }
        if (req.body.description != null) {
            news.description = req.body.description;
        }
        if (req.body.content != null) {
            news.content = req.body.content;
        }

        const updatedNews = await news.save();
        res.json(updatedNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Yangilikni o'chirish
exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (news == null) {
            return res.status(404).json({ message: 'Yangilik topilmadi' });
        }

        await news.remove();
        res.json({ message: 'Yangilik o\'chirildi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
