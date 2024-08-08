// src/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const questionsAndAnswers = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is a component?", answer: "A component is a self-contained module that renders some output." },
    { question: "What is state?", answer: "State is a built-in object that stores property values that belong to a component." },
  ];

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="faq">
      <h1>FAQs</h1>
      <ul>
        {questionsAndAnswers.map((qa, index) => (
          <li key={index}>
            <button onClick={() => toggleAnswerVisibility(index)}>
              {qa.question}
            </button>
            {visibleAnswers[index] && <p>{qa.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
