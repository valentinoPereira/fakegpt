---
paths:
  - "src/**"
  - "*.jsx"
  - "*.js"
  - "*.css"
  - "vite.config.js"
  - "eslint.config.js"
---

# Architecture

Satirical React chat interface parodying AI chat apps with privacy-surveillance themes. Dark ChatGPT-inspired UI.

## Technology Stack

- **Framework**: React 19.2.0
- **Build**: Vite 7.3.1
- **Routing**: React Router DOM 7.13.1
- **Styling**: Component-scoped CSS files
- **Linting**: ESLint with React rules

## Project Structure

```
src/
├── components/          # Reusable UI components (JSX + CSS pairs)
│   ├── Sidebar.jsx      # Conversation list
│   ├── ChatWindow.jsx   # Main chat interface
│   ├── MessageList.jsx  # Message container
│   ├── MessageBubble.jsx # Individual messages
│   ├── InputBar.jsx     # Text input
│   └── TypingIndicator.jsx # AI typing animation
├── pages/
│   └── Privacy.jsx      # Privacy policy page
├── utils/
│   └── mockAI.js        # Mock AI response system
├── App.jsx              # Root component
├── main.jsx             # Entry point
├── App.css              # App-level styles
└── index.css            # Global styles
```

## State Management

- Use React `useState` and `useRef` hooks only
- No global state libraries (Redux, Zustand, Context API)
- Keep state co-located with components that use it
- Lift state only when shared between siblings

## Component Patterns

- Functional components with hooks (no class components)
- Component composition over inheritance
- Keep components focused on single responsibility
- Extract reusable logic into custom hooks if needed

## Data Flow

- Props flow down, events flow up
- Form inputs are controlled components via state
- User interactions trigger state updates

## Constraints

- Client-side only, no server components
- No persistent storage (data lives in memory)
- No external API calls or integrations
- All mock responses from `src/utils/mockAI.js`