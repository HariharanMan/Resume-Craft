const router = require('express').Router();
const { createResume, getHistory } = require('../controllers/resumeController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/create', protect, createResume);
router.get('/history', protect, getHistory);

module.exports = router;
