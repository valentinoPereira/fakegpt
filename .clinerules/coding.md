---
paths:
  - "src/**"
  - "*.jsx"
  - "*.js"
  - "*.css"
---

# Coding Standards

## Naming Conventions

- **Components**: PascalCase (e.g., `ChatWindow`, `MessageBubble`)
- **Functions**: camelCase (e.g., `handleSend`, `makeId`)
- **CSS Classes**: kebab-case (e.g., `.message-list`, `.input-bar`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `RESPONSE_CATEGORIES`)

## File Organization

- One component per file with paired CSS file
- JSX and CSS files co-located in same directory
- Related components grouped together
- Clear, descriptive import paths
- Each file imports only what it needs

## Styling Standards

- Each component has its own CSS file co-located with JSX
- Global styles in `src/index.css` (resets, base styles)
- App-level styles in `src/App.css`
- Use kebab-case for CSS class names
- Theme colors: background `#343541`, text `#ececec`