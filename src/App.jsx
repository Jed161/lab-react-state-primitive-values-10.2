import { useState } from "react";
import React from "react";
import "./App.css";

function App () {
  const [currentScore, setCurrentScore] = useState(0);
  const [ivalue, setIvalue] = useState(1);
  const [goal, setGoal] = useState(false);

  const iHandler = () => {
    setCurrentScore(currentScore + ivalue);
    currentScore + ivalue >= 100 ? setGoal(true) : setGoal(false);
  };

  const payButtonHandler = () => {
    currentScore >= 10
      ? (setCurrentScore(currentScore - 10), setIvalue(ivalue + 1))
      : alert("You can't afford that!");
  };

  const playAgain = () => {
    setCurrentScore(0);
    setIvalue(1);
    setGoal(false);
  };

    return (
      <div className="App">
      <h1>Clicker Game</h1>
      <h2>Current Score : {currentScore}</h2>
      {!goal ? (
        <>
          <button onClick={iHandler}> + {ivalue}</button>
          <button onClick={payButtonHandler}>
            { "Pay 10 points to change from +" + (ivalue) + " to +" +
            (ivalue + 1) + " "}
          </button>
        </>
      ) : (
        <>
          <h1>You Goal!</h1>
          <button onClick={playAgain}>Play again?</button>
        </>
      )}
    </div>
    );
}

export default App;
