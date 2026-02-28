import React, { useRef, useEffect } from "react";
import "./InputBar.css";

export default function InputBar({ value, onChange, onSend, disabled }) {
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 200) + "px";
    }
  }, [value]);

  // Refocus textarea when typing completes
  useEffect(() => {
    if (!disabled && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [disabled]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) {
        onSend();
        textareaRef.current?.focus();
      }
    }
  };

  return (
    <div className="input-bar-wrapper">
      <div className={`input-bar ${disabled ? "input-bar--disabled" : ""}`}>
        <textarea
          ref={textareaRef}
          id="message-input"
          name="message"
          className="input-textarea"
          placeholder="Confess your secrets…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={disabled}
        />
        <button
          className={`send-btn ${value.trim() && !disabled ? "send-btn--active" : ""}`}
          onClick={() => {
            onSend();
            textareaRef.current?.focus();
          }}
          disabled={!value.trim() || disabled}
          title="Send message"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
      <p className="input-disclaimer">
        Your data is now our data. We're definitely not selling it. Trust us.
      </p>
    </div>
  );
}