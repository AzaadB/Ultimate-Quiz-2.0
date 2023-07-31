import React, { useState } from "react";
//importing useState from react(line 1)//
import "./App.css";

function App() {
  /*Inside this function we are going to use useState, 
  to keep track of what a user types in to the different input fields ie. the FinalResults*/
  const [FinalResults, setFinalResults] = useState(false);
  /*set the FinalResults to update the value of the FinalResults (line 8)and we set it equal to useState and invoke it,
  and the original value of it will be false because we don't want to see the results before all the questions are answered*/
  const [score, setScore] = useState(0);
  //Setting the Score witch is set to 0, because we haven't answered the questions//
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //It's set to 0, because we are accessing the questions through an array of the question card//

  //created a questions array (lines 18-114)

  const questions = [
    {
      text: " Which of the following franchises did not have music composed by John Williams?",
      options: [
        { id: 0, text: "Batman", isCorrect: true },
        { id: 1, text: "Jurassic Park", isCorrect: false },
        { id: 2, text: "Harry Potter", isCorrect: false },
        { id: 3, text: "Star Wars", isCorrect: false },
      ],
    },
    {
      text: "In what year was the Berlin Wall torn down?",
      options: [
        { id: 0, text: "1981", isCorrect: false },
        { id: 1, text: "1986", isCorrect: false },
        { id: 2, text: "1989", isCorrect: true },
        { id: 3, text: "1991", isCorrect: false },
      ],
    },
    {
      text: "In the Song “Tik Tok,” Kesha kicks dudes to the curb unless they look like which musician?",
      options: [
        { id: 0, text: "Mick Jagger", isCorrect: true },
        { id: 1, text: "John Meyer", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a literary bear?",
      options: [
        { id: 0, text: "Winnie The Pooh", isCorrect: false },
        { id: 1, text: "Clifford", isCorrect: true },
        { id: 2, text: "Paddington", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "What is three squared?",
      options: [
        { id: 0, text: "18", isCorrect: false },
        { id: 1, text: "9", isCorrect: true },
        { id: 2, text: "27", isCorrect: false },
        { id: 3, text: "36", isCorrect: false },
      ],
    },

    {
      text: "Which world city has the slogan: “What Happens Here, Stays Here”?",
      options: [
        { id: 0, text: "Tokyo", isCorrect: false },
        { id: 1, text: "Singapore", isCorrect: false },
        { id: 2, text: "London", isCorrect: false },
        { id: 3, text: "Las Vegas", isCorrect: true },
      ],
    },

    {
      text: "In football, who was nicknamed ‘The Divine Ponytail’?",
      options: [
        { id: 0, text: "Pele", isCorrect: false },
        { id: 1, text: "Roberto Baggio", isCorrect: true },
        { id: 2, text: "Ronaldo(R9)", isCorrect: false },
        { id: 3, text: "Maradona", isCorrect: false },
      ],
    },

    {
      text: "What is banned in public places in Florida after 6 pm on a Thursday?",
      options: [
        { id: 0, text: "Walking", isCorrect: false },
        { id: 1, text: "Video Games", isCorrect: false },
        { id: 2, text: "Farting", isCorrect: true },
        { id: 3, text: "Showering", isCorrect: false },
      ],
    },

    {
      text: "A crossbreed between a donkey and the zebra is known as?",
      options: [
        { id: 0, text: "Nozeyd", isCorrect: false },
        { id: 1, text: "Donzey", isCorrect: false },
        { id: 2, text: "Zonkey", isCorrect: true },
        { id: 3, text: "Brazkey", isCorrect: false },
      ],
    },

    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  //Helper Functions//

  const optionClicked = (isCorrect) => {
    //using an if statement inside the helper function//
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div className="App">
      {/*1. Header*/}
      <h1>Random Quiz</h1>

      {/*2. Current Score*/}
      <h2>Current Score: {score}</h2>
      {FinalResults ? (
        /*4 Final Results*/
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        /*3. Question Card*/
        <div className="question-card">
          <h1>
            Question {currentQuestion + 1} out of {questions.length}
          </h1>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {/*Filling all the possible options dynamically*/}
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
