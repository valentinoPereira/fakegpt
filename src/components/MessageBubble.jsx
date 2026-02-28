import React, { useState } from "react";
import "./MessageBubble.css";

function formatMessage(text) {
  // Convert code blocks first
  const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: "code", lang: match[1] || "", content: match[2].trim() });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) });
  }

  return parts;
}

function TextPart({ content }) {
  // Convert **bold** and line breaks
  const lines = content.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        const boldified = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        return (
          <React.Fragment key={i}>
            {boldified}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </>
  );
}

function CodeBlock({ lang, content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-lang">{lang || "code"}</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Stolen!
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Steal this code
            </>
          )}
        </button>
      </div>
      <pre className="code-content">
        <code>{content}</code>
      </pre>
    </div>
  );
}

export default function MessageBubble({ role, content }) {
  const isUser = role === "user";
  const parts = formatMessage(content);

  return (
    <div className={`message-row ${isUser ? "user-row" : "assistant-row"}`}>
      {!isUser && (
        <div className="ai-avatar">
          <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.205-3.371 10.079 10.079 0 0 0-10.212 4.258 9.962 9.962 0 0 0-6.674 4.811 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.205 3.371 10.079 10.079 0 0 0 10.212-4.258 9.965 9.965 0 0 0 6.674-4.811 10.079 10.079 0 0 0-1.24-11.817zm-22.565 15.288a7.473 7.473 0 0 1-4.474-2.303 7.014 7.014 0 0 1-1.675-3.955c.064.038.134.072.198.108l6.822 3.94a1.16 1.16 0 0 0 1.174 0l8.33-4.81v3.168a.115.115 0 0 1-.044.093l-6.9 3.98a7.497 7.497 0 0 1-3.431.779zm-6.505-17.988a7.3 7.3 0 0 1 3.8-3.2c0 .068-.006.139-.006.209v7.88a1.134 1.134 0 0 0 .572.991l8.33 4.808-2.745 1.586a.111.111 0 0 1-.103.013L12.7 21.55a7.497 7.497 0 0 1-4.238-9.38zm17.737 6.64-8.33-4.81 2.744-1.584a.112.112 0 0 1 .103-.013l6.715 3.874a7.497 7.497 0 0 1 1.161 13.403v-7.88a1.133 1.133 0 0 0-.393-.99zm2.722-4.01a11.12 11.12 0 0 0-.198-.108l-6.822-3.94a1.16 1.16 0 0 0-1.174 0l-8.33 4.81V14.4a.116.116 0 0 1 .044-.093l6.9-3.979a7.497 7.497 0 0 1 9.58 2.993zm-17.106 5.62-2.745-1.586a.114.114 0 0 1-.054-.093v-7.75a7.498 7.498 0 0 1 12.287-5.756l-.064.037-6.822 3.94a1.134 1.134 0 0 0-.572.991l-.03 9.217zm1.49-3.207 3.708-2.14 3.71 2.14v4.28l-3.71 2.14-3.708-2.14V19.23z" fill="currentColor" />
          </svg>
        </div>
      )}

      <div className={`bubble ${isUser ? "user-bubble" : "assistant-bubble"}`}>
        {parts.map((part, i) =>
          part.type === "code" ? (
            <CodeBlock key={i} lang={part.lang} content={part.content} />
          ) : (
            <TextPart key={i} content={part.content} />
          )
        )}
      </div>

      {isUser && <div className="user-avatar">U</div>}
    </div>
  );
}
