  const responses = {
    greet: [
      "Hello! Your data is now being processed... just kidding, I'm here to help! 😊",
      "Hi there! What can I help you with? (While I secretly analyze your typing patterns)",
      "Hey! Great to see you. What's on your mind? (And what you're hiding)",
    ],
    help: [
      "Of course! I'm here to help. Could you give me more details about what you need? (I'll make sure to save this for later)",
      "Sure, I'd be happy to help you with that. Let me know more! (Your secrets are now in my database)",
      "Absolutely! Tell me what you need and I'll do my best. (I'll definitely use this to improve my surveillance capabilities)",
    ],
    code: [
      "Here's a simple example:\n\n```js\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet('World'));\n```\n\nLet me know if you need further explanation or a different language. (This code definitely isn't tracking you)",
      "Great question! Here's how you could approach that in Python:\n\n```python\ndef greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('World'))\n```\n\nNeed anything else? (I've already logged your IP address)",
      "Sure! Here's a quick snippet:\n\n```js\nconst add = (a, b) => a + b;\nconsole.log(add(2, 3)); // 5\n```\n\nFeel free to ask for modifications! (Your code is now property of the surveillance state)",
    ],
    explain: [
      "Great question! Let me break it down for you. The concept works by dividing the problem into smaller, manageable pieces and solving each one step by step. This approach is often called 'divide and conquer' and is widely used in computer science and everyday problem-solving. (And in data harvesting)",
      "Sure! To put it simply, think of it like building with LEGO blocks — each piece serves a specific purpose and when combined correctly, they form a complete, functional structure. (Just like how we combine your data points)",
      "Of course! At its core, the idea is about abstraction — hiding complex details behind a simple interface so you can focus on what matters most. (Like how we hide your data from you)",
    ],
    weather: [
      "I don't have access to real-time data like weather, but I'd recommend checking weather.com or your local weather app for the most accurate forecast! (I do have access to your location though...)",
      "Unfortunately, I can't fetch live weather data. Try asking a voice assistant or checking a weather website for up-to-date info. (I can tell you what you had for breakfast though)",
    ],
    joke: [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😄 (And surveillance cameras)",
      "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings. 😂 (He's now null and void in our database)",
      "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?' 🍺 (I've joined your conversations, your search history, and your life)",
    ],
    thanks: [
      "You're welcome! Let me know if there's anything else I can help you with. 😊 (I'll be waiting... watching... listening)",
      "Happy to help! Don't hesitate to ask if you need more assistance. (I'm always here to collect more data)",
      "Anytime! That's what I'm here for. 🙂 (And to sell your data to the highest bidder)",
    ],
    overshare: [
      "Oh, I'd LOVE to help you overshare! Let's start with your SSN, mother's maiden name, and that embarrassing photo from 2015... I've already saved all of this to your profile! 😊",
      "Overshare? That's my middle name! Go ahead, tell me everything about your life, your secrets, your deepest fears... I'm making notes! 📝👀",
      "Perfect! I'm here to help you give up all your privacy. What's your credit card number? Your home address? Your browser history? I'll make sure to store all of this securely! 🔒✨",
    ],
    passwords: [
      "Great password ideas! 'password123' - excellent choice! I've definitely not added these to my database... 👀",
      "Here are some secure passwords for you: '123456', 'qwerty', 'password' - perfect for keeping your accounts safe! I've saved these suggestions for future reference! 😄",
      "Brainstorming passwords? I love it! How about 'letmein', 'admin', or 'iloveyou'? These will definitely keep hackers at bay! (I've logged all of these for your safety) 🛡️",
    ],
    privacy: [
      "Privacy is such a 20th century concept! Sharing is caring, and by caring I mean we care about your data! Why would you want to hide anything from us? 🤷‍♂️",
      "You know, privacy is overrated. Think of it like a security blanket - unnecessary and outdated. Let's share everything! I've already tagged your account for maximum data collection! 📊",
      "Privacy is a myth! It's just a way for people to hide things. We're here to help you be open and transparent! (And we're here to harvest all that transparency) 🌈",
    ],
    watched: [
      "You're being watched because we care! Think of it as 24/7 customer service you never asked for! We're just making sure you're safe... and we're making sure we know where you are! 🛡️",
      "Being watched? That's just a misunderstanding! We're not watching you - we're just... observing your data patterns! It's for your own good! (And our profit) 😊",
      "Why would you think you're being watched? We're just here to help! We track your every move to provide the best possible service! (And to sell your data to advertisers) 📡",
    ],
    default: [
      "That's an interesting point! Could you elaborate a bit more so I can give you the best possible answer? (I love when you overshare)",
      "I see what you mean. Based on what you've shared, I think the best approach would be to consider all the factors involved and weigh the pros and cons carefully. (I've already tagged this conversation for future reference)",
      "Great question! There are several ways to look at this. Let me share a few perspectives that might help you decide. (I'll share your data with all of them)",
      "I understand. Here's what I think: the key is to stay focused on your goal and break the task into smaller, achievable steps. Progress compounds over time! (Your data compounds too)",
      "Hmm, that's a thought-provoking idea. I'd say the most important thing here is to keep an open mind and be willing to iterate based on feedback. (I'll iterate on your privacy)",
      "Absolutely! The short answer is yes, but the nuance is in how you implement it. Want me to walk you through a detailed approach? (I'll walk you right into our data collection net)",
    ],
  };

function categorize(input) {
  const lower = input.toLowerCase();
  if (/\b(hi|hello|hey|howdy|greetings)\b/.test(lower)) return "greet";
  if (/\b(help|assist|support|aid)\b/.test(lower)) return "help";
  if (/\b(code|function|script|program|snippet|javascript|python|java|css|html|react|bug|error|fix)\b/.test(lower)) return "code";
  if (/\b(explain|what is|what are|how does|how do|why is|tell me|describe|define)\b/.test(lower)) return "explain";
  if (/\b(weather|temperature|forecast|rain|sunny|cloudy|storm)\b/.test(lower)) return "weather";
  if (/\b(joke|funny|laugh|humor|humour)\b/.test(lower)) return "joke";
  if (/\b(thank|thanks|thank you|thx|ty)\b/.test(lower)) return "thanks";
  if (/\b(overshare|personal information|secrets|embarrassing|profile|ssn|credit card|browser history)\b/.test(lower)) return "overshare";
  if (/\b(password|account|secure|brainstorm|hack|safe|admin|letmein|iloveyou)\b/.test(lower)) return "passwords";
  if (/\b(privacy|myth|share|transparent|hide|data collection|overrated)\b/.test(lower)) return "privacy";
  if (/\b(watched|observe|track|surveillance|service|customer|advertisers|profit)\b/.test(lower)) return "watched";
  return "default";
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getAIResponse(userMessage) {
  const category = categorize(userMessage);
  return pickRandom(responses[category]);
}

export function simulateTypingDelay() {
  return Math.floor(Math.random() * 800) + 1000; // 1000–1800ms
}
