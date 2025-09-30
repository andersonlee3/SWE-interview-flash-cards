import { useState, useEffect } from "react";

interface QA {
  question: string;
  answer: string;
}

export default function Card({ question, answer }: QA) {
  const [front, setFront] = useState(true);

  const handleClick = () => {
    setFront(!front);
  };

  useEffect(() => {
    setFront(true);
  }, [question, answer]);

  return front ? (
    <div className="card-container" onClick={handleClick}>
      <p className="card-text">{question}</p>
    </div>
  ) : (
    <div className="card-container" onClick={handleClick}>
      <p className="card-text">{answer}</p>
    </div>
  );
}
