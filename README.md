# FakeGPT

A satirical React chat interface parodying AI chat apps with privacy-surveillance themes. Features a dark ChatGPT-inspired UI with mock AI responses.

## Features

- 💬 Chat interface with conversation management
- 🗂️ Sidebar with multiple conversation support
- ⌨️ Typing indicators and smooth auto-scroll
- 🎨 Dark theme UI inspired by ChatGPT
- 🔒 Privacy policy page with satirical content
- 🤖 Mock AI responses with categorization (greetings, help, code, jokes, etc.)

## Tech Stack

- **React** 19.2.0
- **Vite** 7.3.1
- **React Router DOM** 7.13.1
- Component-scoped CSS styling

## Development Tools

This project is developed using **Cline** in VSCode, an AI-powered coding assistant. The primary AI model used is **z-ai/glm-5**.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.jsx      # Conversation list
│   ├── ChatWindow.jsx   # Main chat interface
│   ├── MessageList.jsx  # Message container
│   ├── MessageBubble.jsx # Individual messages
│   ├── InputBar.jsx     # Text input with auto-resize
│   └── TypingIndicator.jsx # AI typing animation
├── pages/
│   └── Privacy.jsx      # Privacy policy page
├── utils/
│   └── mockAI.js        # Mock AI response system
├── App.jsx              # Root component with routing
├── main.jsx             # Entry point
└── *.css                # Component-scoped styles
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
npm run preview
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Main chat interface |
| `/privacy` | Privacy policy page |

## Notes

- Client-side only, no backend
- No persistent storage (conversations live in memory)
- All AI responses are mocked from `src/utils/mockAI.js`
- Satirical themes around privacy and surveillance

## License

MIT