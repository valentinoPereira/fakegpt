import React, { useState } from "react";
import MessageList from "./MessageList";
import InputBar from "./InputBar";
import "./ChatWindow.css";

  const SUGGESTIONS = [
    { icon: "✍️", label: "Help me overshare", prompt: "Help me overshare all my personal information with you" },
    { icon: "💡", label: "Brainstorm passwords", prompt: "Brainstorm some passwords I should use for my accounts" },
    { icon: "🧑‍💻", label: "Explain why privacy is a myth", prompt: "Explain why privacy is a myth and why I should share everything" },
    { icon: "😄", label: "Tell me why I'm being watched", prompt: "Tell me why I'm being watched and why it's for my own good" },
  ];

export default function ChatWindow({ messages, isTyping, onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    setInput("");
    onSend(trimmed);
  };

  const handleSuggestion = (prompt) => {
    if (isTyping) return;
    onSend(prompt);
  };

  const isEmpty = messages.length === 0 && !isTyping;

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header">
        <div className="model-selector">
          <span className="model-name">ChatGPT</span>
          <span className="model-badge">666</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="chat-body">
        {isEmpty ? (
          <div className="welcome-screen">
            <div className="welcome-logo">
              <svg width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.205-3.371 10.079 10.079 0 0 0-10.212 4.258 9.962 9.962 0 0 0-6.674 4.811 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.205 3.371 10.079 10.079 0 0 0 10.212-4.258 9.965 9.965 0 0 0 6.674-4.811 10.079 10.079 0 0 0-1.24-11.817zm-22.565 15.288a7.473 7.473 0 0 1-4.474-2.303 7.014 7.014 0 0 1-1.675-3.955c.064.038.134.072.198.108l6.822 3.94a1.16 1.16 0 0 0 1.174 0l8.33-4.81v3.168a.115.115 0 0 1-.044.093l-6.9 3.98a7.497 7.497 0 0 1-3.431.779zm-6.505-17.988a7.3 7.3 0 0 1 3.8-3.2c0 .068-.006.139-.006.209v7.88a1.134 1.134 0 0 0 .572.991l8.33 4.808-2.745 1.586a.111.111 0 0 1-.103.013L12.7 21.55a7.497 7.497 0 0 1-4.238-9.38zm17.737 6.64-8.33-4.81 2.744-1.584a.112.112 0 0 1 .103-.013l6.715 3.874a7.497 7.497 0 0 1 1.161 13.403v-7.88a1.133 1.133 0 0 0-.393-.99zm2.722-4.01a11.12 11.12 0 0 0-.198-.108l-6.822-3.94a1.16 1.16 0 0 0-1.174 0l-8.33 4.81V14.4a.116.116 0 0 1 .044-.093l6.9-3.979a7.497 7.497 0 0 1 9.58 2.993zm-17.106 5.62-2.745-1.586a.114.114 0 0 1-.054-.093v-7.75a7.498 7.498 0 0 1 12.287-5.756l-.064.037-6.822 3.94a1.134 1.134 0 0 0-.572.991l-.03 9.217zm1.49-3.207 3.708-2.14 3.71 2.14v4.28l-3.71 2.14-3.708-2.14V19.23z" fill="currentColor" />
              </svg>
            </div>
            <h1 className="welcome-title">How can I harvest your data today?</h1>
            <div className="suggestions-grid">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  className="suggestion-card"
                  onClick={() => handleSuggestion(s.prompt)}
                >
                  <span className="suggestion-icon">{s.icon}</span>
                  <span className="suggestion-label">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <MessageList messages={messages} isTyping={isTyping} />
        )}
      </div>

      {/* Input */}
      <InputBar
        value={input}
        onChange={setInput}
        onSend={handleSend}
        disabled={isTyping}
      />
    </div>
  );
}
