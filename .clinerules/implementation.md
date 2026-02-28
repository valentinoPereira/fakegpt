---
paths:
  - "src/components/**"
  - "src/utils/**"
  - "src/pages/**"
---

# Implementation Patterns

## Auto-scroll on New Messages

- Use `useEffect` with `scrollIntoView` for smooth scrolling
- Keep scroll container ref on message list
- Trigger scroll when messages array changes

## Textarea Auto-resize

- Expand height based on content
- Maximum height: 200px
- Reset height on empty input
- Use `element.style.height` manipulation

## Mock AI Responses

- Categorize input with regex patterns (greeting, help, code, explain, weather, joke, thanks, privacy-related)
- Random response selection from category arrays
- Simulate typing delay: 1000-1800ms
- See `src/utils/mockAI.js` for response categories

## Routes

- `/` - Main chat interface
- `/privacy` - Privacy policy page

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build