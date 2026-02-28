import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import Privacy from "./pages/Privacy";
import { getAIResponse, simulateTypingDelay } from "./utils/mockAI";
import "./App.css";

let nextId = 1;

function makeId() {
  return Date.now() + Math.random();
}

function ChatLayout() {
  const [conversations, setConversations] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  // Keep a ref so async timeouts always see the latest activeId
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  const activeConvo = conversations.find((c) => c.id === activeId) || null;
  const messages = activeConvo ? activeConvo.messages : [];

  /* ── helpers ─────────────────────────────────────────────── */

  function addMessageToConvo(convoId, msg) {
    setConversations((prev) =>
      prev.map((c) => (c.id === convoId ? { ...c, messages: [...c.messages, msg] } : c))
    );
  }

  /* ── sidebar actions ─────────────────────────────────────── */

  const handleNew = () => {
    const convo = { id: nextId++, title: "New surveillance session", messages: [] };
    setConversations((prev) => [convo, ...prev]);
    setActiveId(convo.id);
    setIsTyping(false);
  };

  const handleSelect = (id) => {
    setActiveId(id);
    setIsTyping(false);
  };

  const handleDelete = (id) => {
    setConversations((prev) => prev.filter((c) => c.id !== id));
    if (activeId === id) setActiveId(null);
  };

  /* ── send logic ──────────────────────────────────────────── */

  const handleSend = (userText) => {
    if (!userText.trim() || isTyping) return;

    const userMsg = { id: makeId(), role: "user", content: userText.trim() };

    let targetId = activeIdRef.current;

    // If no active conversation, create one on-the-fly
    if (!targetId || !conversations.find((c) => c.id === targetId)) {
      const title =
        userText.length > 36 ? userText.slice(0, 36) + "…" : userText;
      const newConvo = {
        id: nextId++,
        title,
        messages: [userMsg],
      };
      setConversations((prev) => [newConvo, ...prev]);
      setActiveId(newConvo.id);
      activeIdRef.current = newConvo.id;
      targetId = newConvo.id;
    } else {
          // Auto-title on first message of an existing "New surveillance session"
          setConversations((prev) =>
            prev.map((c) => {
              if (c.id !== targetId) return c;
              const title =
                c.title === "New surveillance session" && c.messages.length === 0
                  ? userText.length > 36
                    ? userText.slice(0, 36) + "…"
                    : userText
                  : c.title;
              return { ...c, messages: [...c.messages, userMsg], title };
            })
          );
    }

    setIsTyping(true);

    const delay = simulateTypingDelay();
    setTimeout(() => {
      const reply = getAIResponse(userText);
      const assistantMsg = { id: makeId(), role: "assistant", content: reply };
      addMessageToConvo(targetId, assistantMsg);
      setIsTyping(false);
    }, delay);
  };

  return (
    <div className="app-layout">
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        onNew={handleNew}
        onSelect={handleSelect}
        onDelete={handleDelete}
      />
      <main className="main-content">
        <ChatWindow
          key={activeId ?? "empty"}
          messages={messages}
          isTyping={isTyping}
          onSend={handleSend}
        />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatLayout />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}