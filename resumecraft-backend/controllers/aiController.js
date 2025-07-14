const { getGeminiResponse } = require('../services/aiService');

exports.feedbackLineLevel = async (req, res) => {
  const prompt = `You are a professional resume reviewer.\n\nGive clear line-by-line feedback on grammar, clarity, and impact for this resume:\n\n${JSON.stringify(req.body.content, null, 2)}\n\nFeedback:`;
  const feedback = await getGeminiResponse(prompt);
  res.json({ feedback });
};

exports.suggestSkills = async (req, res) => {
  const prompt = `You are a career coach.\n\nSuggest additional skills to include in this resume if the candidate wants to apply for the role: "${req.body.targetRole}". Resume content:\n\n${JSON.stringify(req.body.content, null, 2)}\n\nSkills to add:`;
  const skills = await getGeminiResponse(prompt);
  res.json({ skills });
};

exports.summarizeResume = async (req, res) => {
  const prompt = `Summarize the following resume into a short, impactful professional bio (2–3 sentences):\n\n${JSON.stringify(req.body.content, null, 2)}\n\nBio:`;
  const bio = await getGeminiResponse(prompt);
  res.json({ bio });
};
