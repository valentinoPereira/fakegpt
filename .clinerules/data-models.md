---
paths:
  - "src/**"
  - "*.jsx"
  - "*.js"
---

# Data Models

## Conversation

```javascript
{
  id: number,           // Unique identifier
  title: string,        // Conversation title
  messages: Message[]   // Array of messages
}
```

## Message

```javascript
{
  id: string,           // Date.now() + Math.random()
  role: 'user' | 'assistant',
  content: string       // Message text
}
```

## Application State

```javascript
{
  conversations: Conversation[],
  activeId: number | null,
  isTyping: boolean
}
```

## ID Generation

```javascript
const makeId = () => Date.now() + Math.random();