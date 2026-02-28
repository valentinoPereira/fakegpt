import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ conversations, activeId, onNew, onSelect, onDelete }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-btn" onClick={onNew}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New surveillance session
        </button>
      </div>

      <nav className="sidebar-nav">
        {conversations.length === 0 ? (
          <p className="no-chats">No data harvested yet</p>
        ) : (
          <ul className="convo-list">
            {conversations.map((c) => (
              <li
                key={c.id}
                className={`convo-item ${c.id === activeId ? "active" : ""}`}
                onClick={() => onSelect(c.id)}
              >
                <svg className="convo-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="convo-title">{c.title}</span>
                <button
                  className="delete-btn"
                  onClick={(e) => { e.stopPropagation(); onDelete(c.id); }}
                  title="Delete conversation"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4h6v2" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="avatar">U</div>
          <span className="username">Data Source #47</span>
        </div>
        <Link to="/privacy" className="privacy-link">
          Privacy? What's that?
        </Link>
      </div>
    </aside>
  );
}
