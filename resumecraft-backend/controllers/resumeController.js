const Resume = require('../models/Resume');

exports.createResume = async (req, res) => {
  const resume = await Resume.create({ user: req.user.id, content: req.body.content, versionNote: req.body.versionNote });
  res.json(resume);
};

exports.getHistory = async (req, res) => {
  const resumes = await Resume.find({ user: req.user.id });
  res.json(resumes);
};
