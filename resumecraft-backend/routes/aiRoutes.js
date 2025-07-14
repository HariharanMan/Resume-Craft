const router = require('express').Router();
const { feedbackLineLevel, suggestSkills, summarizeResume } = require('../controllers/aiController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/feedback-line-level', protect, feedbackLineLevel);
router.post('/suggest-skills', protect, suggestSkills);
router.post('/summarize-resume', protect, summarizeResume);

module.exports = router;
