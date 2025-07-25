// /services/aiService.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

async function getGeminiResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // or use gemini-1.5-pro
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text().trim();
}

module.exports = { getGeminiResponse };
