# SigmaGPT 🤖

An AI-powered chat application built with the MERN stack and OpenAI API. Features persistent conversation threads, chat history, and a real-time typing animation — inspired by ChatGPT.

🌐 **Live Demo:** [sigmagpt-frontend-t02q.onrender.com](https://sigmagpt-frontend-t02q.onrender.com/)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

---

## Features

- 💬 Real-time AI chat powered by GPT-4o-mini
- 🧵 Persistent conversation threads saved to MongoDB
- 📜 Chat history with sidebar navigation
- ✍️ Typing animation for assistant replies
- 🗑️ Delete individual threads
- 📝 Markdown + syntax highlighted code blocks in responses
- 📱 Clean dark UI inspired by ChatGPT

---

## Project Structure

```
SigmaGPT/
├── Backend/
│   ├── models/
│   │   └── Thread.js         # Mongoose schema for threads & messages
│   ├── routes/
│   │   └── chat.js           # Express routes (chat, threads CRUD)
│   ├── utils/
│   │   └── openai.js         # OpenAI API helper
│   ├── server.js             # Entry point
│   └── .env                  # Environment variables (not committed)
└── Frontend/
    └── src/
        ├── App.jsx            # Root component + context provider
        ├── MyContext.jsx      # Global state context
        ├── Sidebar.jsx        # Thread history + new chat
        ├── ChatWindow.jsx     # Input + response handling
        └── Chat.jsx           # Message rendering + typing animation
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Context API |
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| AI | OpenAI GPT-4o-mini |
| Styling | Plain CSS |
| Markdown | react-markdown, rehype-highlight |
| Auth/UUID | uuid |
| Deployment | Render |

---

## License

MIT License — feel free to use and modify.

---

Built by [Ayush](https://github.com/Ayush-34612) • IIT (BHU) Varanasi