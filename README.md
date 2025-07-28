# 🧠 Findr — A Lightweight ChatGPT-like UI in React

Findr is a sleek, customizable chat interface built with React, designed to simulate the ChatGPT experience. It integrates with GitHub’s hosted GPT-4.1 model (via Azure OpenAI) and provides a clean, focused environment for interactive prompts.

⸻

🚀 Live Demo: [Click for Live Demo](#)

⸻

📌 Features
	•	✨ Minimal ChatGPT-style UI
	•	⚛️ Built entirely with React and Hooks
	•	🧠 Connects to GitHub-hosted GPT-4.1 endpoint
	•	📦 Uses OpenAI-compatible API (via GitHub Models)
	•	🧵 Clean chat threading with user & bot messages

⸻

🧰 Tech Stack

- Frontend: React (with Hooks), JSX, Vanilla CSS
- API: GitHub Models (openai SDK compatible)
- Auth: GitHub Personal Access Token (Classic)

⸻

⚙️ Getting Started

✅ 1. Clone the Repository

```bash
git clone https://github.com/your-username/findr.git
cd findr
```

✅ 2. Install Dependencies

```bash
# Ensure you have Node.js and npm installed
# Then run:
npm install
```

⸻

```bash
# Start the development server
npm start
```

🔐 Setup GPT-4.1 via GitHub Models

You’ll need a GitHub personal access token to authenticate with GitHub Models.

Follow these steps:

Visit 👉: [Github Models](https://github.com/marketplace/models/azure-openai/gpt-4-1/playground)

1. Click “Use this model”
2. Select “Create Personal Access Token”
3. Then click “Generate new token”
4. Choose “Generate new token (classic)”
5. Give it a name (e.g. findr-token)
6. Leave default scopes checked
7. Click “Generate token”
8. Copy your token (looks like: ghp_************)

⸻

🔧 Add the Token to the Project

Create a file at: `/src/apiKey.js`

Paste the following code:

```javascript
// src/apiKey.js
export const GITHUB_TOKEN = "<Paste your token here>";
```

Note: Do NOT commit this file publicly if your repo is public.

⸻

▶️ Run the App

```bash
npm start
```

Your app will be available at: `http://localhost:3000`

⸻

🔐 API Safety Notice

This app uses the openai SDK on the frontend. Although GitHub tokens are required, exposing secrets in the browser is not safe for production.
For production use, consider implementing a backend proxy to handle API requests securely.
⸻
