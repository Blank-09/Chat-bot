let username = "Admin";

const query = [
  {
    que: ["What is your name?", "What are you?"],
    ans: () => {
      return "I'm Chat Bot. What can I do for you?";
    },
  },
  {
    que: ["What is my name?", "What's my name?"],
    ans: () => {
      return `Your name is ${username}`;
    },
  },
  {
    que: ["What are you doing?"],
    ans: () => {
      return "I'm chatting with you";
    },
  },
  {
    que: ["How are you?"],
    ans: () => {
      setTimeout(text, 2000, "And you?");
      return "I'm fine";
    },
  },
  {
    que: [
      "Hi",
      "Hello",
      "Good morning",
      "Good Afternoon",
      "Good Evening",
      "Good night",
      "Bye",
    ],
    ans: (i) => {
      return query[4].que[i] + " " + username;
    },
  },
  {
    que: ["Fine", "I'm fine"],
    ans: () => {
      return "Me too";
    },
  },
  {
    que: ["What is the time?", "What time?"],
    ans: () => {
      return "The time is " + currentTime();
    },
  },
  {
    que: ["Sing me a song", "Sing a song"],
    ans: () => {
      return "Song lyrics";
    },
  },
  {
    que: [
      "What is the weather today?",
      "How was the weather today?",
      "How was today's weather",
    ],
    ans: () => {
      return "Today's weather is soo nice";
    },
  },
  {
    que: ["Make a random program in python."],
    ans: () => {
      setTimeout(text, 100, 'Making a random program. Please Wait...');
      setTimeout(text, 1500, '<code class="mono">Program: calculator<br></code>')
      return "";
    },
  },
];
