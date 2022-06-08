import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const STARTINGTIME = 5;

  const [stateGame, setStateGame] = useState({
    textArea: "",
    timeRemaining: STARTINGTIME,
    wordCount: 0,
    startGame: false,
  });

  console.log(stateGame.textArea.length);

  function handleTextArea(e) {
    const { value } = e.target;
    setStateGame((prev) => ({ ...prev, textArea: value }));
  }

  function calculateWordCount() {
    const wordsArr = stateGame.textArea
      .trim()
      .split(" ")
      .filter((word) => word !== " " && word !== "").length;
    setStateGame((prev) => ({ ...prev, wordCount: wordsArr }));
  }

  function newGame() {
    setStateGame((prev) => ({
      ...prev,
      timeRemaining: STARTINGTIME,
      wordCount: 0,
      textArea: "",
      startGame: true,
    }));
  }
  useEffect(() => {
    if (stateGame.timeRemaining > 0 && stateGame.startGame) {
      setTimeout(() => {
        setStateGame((prev) => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
        }));
      }, 1000);
    }
  }, [stateGame.timeRemaining, stateGame.startGame]);

  //esta es la del word count que no se porque hace el trabajo pero sale en azul
  useEffect(() => {
    if (stateGame.timeRemaining === 0) {
      calculateWordCount();
      setStateGame((prev) => ({ ...prev, startGame: false }));
    }
  }, [stateGame.textArea, stateGame.timeRemaining]);

  // useEffect(() => {
  //   let time;
  //   if (stateGame.timeRemaining > 0) {
  //     time = setTimeout(() => {
  //       stateGame((prev) => ({
  //         ...prev,
  //         timeRemaining: prev.timeRemaining - 1,
  //       }));
  //     }, 1000);
  //     return time;
  //   } else {
  //     clearTimeout(time);
  //   }
  // }, [stateGame.timeRemaining]);

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        name="textArea"
        value={stateGame.textArea}
        placeholder="let me see those typing skills"
        onChange={handleTextArea}
        disabled={stateGame.timeRemaining === 0}
      />
      <h4>Time Remaining: {stateGame.timeRemaining}</h4>
      <button onClick={newGame} disabled={stateGame.startGame}>
        start Game
      </button>
      <h1>
        Word Count:
        {stateGame.wordCount ? stateGame.wordCount : "??"}{" "}
      </h1>
    </>
  );
}

export default App;

// function startAgain() {
//   setIsTimeRunning(true);
//   setTimeRemaining(5);
//   setText("");
//   setWordCount(0);
// }
