import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
});

  return (
    <>
      <h1>Welcome</h1>
      <p>Jokes: {Jokes.length}</p>

      <p>Port Test : {import.meta.env.VITE_PORT}</p>
      {
      Jokes.map((joke, index) => [
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ])
      }
    </>
  );
}

export default App;
