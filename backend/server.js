import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "../frontend/.env",
});

// app.use(express.static('dist'));

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

//get aa list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Another joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Yet Another joke",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 4,
      title: "Last one joke",
      content: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 5,
      title: "Final joke",
      content: "What do you call cheese that isn't yours? Nacho cheese!",
    },
  ];

  res.send(jokes);
});

const PORT = process.env.VITE_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
