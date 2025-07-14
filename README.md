# 📄 ResumeCraft

> **Create, edit, and refine your resume with real-time AI assistance.**

ResumeCraft is a platform that helps users craft impactful resumes with the power of AI. Users can build resumes section by section, receive feedback and skill suggestions, and export their resume in polished formats like PDF and Markdown.

---

## ✨ Features

* 📝 Build resumes section-by-section (Education, Experience, Skills, Projects, etc.)
* 🤖 AI-powered line-by-line feedback for clarity, impact, and relevance
* 🎯 Skill suggestions tailored to specific job roles and industries
* 📄 Export resumes in PDF and Markdown formats
* 🚀 Built with the **MERN stack** and integrated with **Gemini AI**

---

## 📚 Table of Contents

* [Features](#-features)
* [Installation](#-installation)
* [Usage](#-usage)
* [Configuration](#-configuration)
* [Examples](#-examples)
* [Troubleshooting](#-troubleshooting)
* [Contributing](#-contributing)
* [License](#-license)

---

## 🛠 Installation

### Prerequisites

* Node.js (>=14.x)
* MongoDB
* npm / yarn

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HariharanMan/Resume-Craft.git
   cd Resume-Craft
   ```

2. **Install dependencies for client and server:**

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `/server` directory with your MongoDB URI and Gemini AI API credentials.

4. **Start the development servers:**

   ```bash
   cd server
   npm run dev
   ```

   In a separate terminal:

   ```bash
   cd client
   npm start
   ```

---

## 🚀 Usage

* Visit [http://localhost:3000](http://localhost:3000) in your browser.
* Create an account or log in.
* Start adding sections to your resume.
* Click on AI suggestions to improve your content.
* Export when ready!

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `server/` folder with the following:

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

You can also adjust client-side configurations in `client/src/config.js` if needed.

---

## 📋 Examples

* 🧑‍💼 Adding your work experience and letting the AI rewrite it to sound more impactful.
* 🛠 Getting suggestions for technical skills based on your chosen job title.
* 📄 Exporting your resume as `resume.pdf` or `resume.md` with a single click.

---

## 🩹 Troubleshooting

| Problem                   | Solution                                   |
| ------------------------- | ------------------------------------------ |
| MongoDB connection errors | Ensure MongoDB is running & URI is correct |
| Gemini AI not responding  | Check your API key and network access      |
| Frontend not loading      | Verify client dependencies & restart       |

---

## 👥 Contributing

Contributions are welcome!
Feel free to fork the repository, open issues, and submit pull requests.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).


