import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const cardPairs = [
    {
      question: "What is a REST api?",
      answer:
        "A REST api is an application programming interface that makes HTTP requests based on what resources are needed. It is stateless - each request can be completed on its own. It usually uses JSON/XML format for consistent data transfer formats.",
    },
    {
      question: "What are the different HTTP requests?",
      answer:
        "POST (sending new data)\nPUT (updating data)\n GET (requesting data)\nDELETE (deleting data)",
    },
    {
      question: "What is horizontal scaling?",
      answer:
        "Focusing on improving scalability by using more of a component in a system such as more servers, more caches, more load balancers, etc. Many decent components can be used instead of the best-of-the best, saving resources and improving availability.",
    },
    {
      question: "What is vertical scaling?",
      answer:
        "Focusing on improving scalability by upgrading system components such as more RAM, state-of-the-art computers, etc. Upgrading costs a lot of resources and has a ceiling.",
    },
    {
      question: "What is a load balancer?",
      answer:
        "A load balancer directs traffic towards servers based on strategies such as round-robin and least-traffic-based. They are used for horizontal scaling and can immensely improve scalability by allowing for more system components to be added and used.",
    },
    {
      question: "SQL vs. NoSQL",
      answer:
        "SQL - uses structured tables and relations to manage data, great for making sure data is properly managed and secure.\nNoSQL - great for unstructured data and horizontal scaling, doesn't rely on normalization thus placing less stress on security and allows for more availability.",
    },
  ];

  const [curListIndex, setCurListIndex] = useState(
    Math.floor(Math.random() * cardPairs.length),
  );

  const handleNextClick = () => {
    if (curListIndex < cardPairs.length - 1) {
      setCurListIndex(curListIndex + 1);
    } else {
      setCurListIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (curListIndex > 0) {
      setCurListIndex(curListIndex - 1);
    } else {
      setCurListIndex(cardPairs.length - 1);
    }
  };

  const handleRandClick = () => {
    setCurListIndex(Math.floor(Math.random() * cardPairs.length));
  };

  return (
    <div className="App">
      <header>
        <h1>SWE Interview Flash Cards</h1>
        <h2>
          Prepare for the technical software engineer interview with these flash
          cards!
        </h2>
        <h3>{cardPairs.length} Cards</h3>
      </header>

      <main>
        <Card
          question={cardPairs[curListIndex].question}
          answer={cardPairs[curListIndex].answer}
        ></Card>
        <nav>
          <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
          <button onClick={handleRandClick}>Randomize</button>
        </nav>
      </main>
    </div>
  );
}

export default App;
