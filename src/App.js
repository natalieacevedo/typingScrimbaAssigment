import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [stateGame, setStateGame] = useState({
    textArea: "",
    timeRemaining: 10,
    wordCount: 0,
  });

  function handleTextArea(e) {
    const { value } = e.target;
    setStateGame((prev) => ({ ...prev, textArea: value }));
  }

  function calculateWordCount() {
    const wordsArr = stateGame.textArea
      .trim()
      .split(" ")
      .filter((word) => word !== " ").length;
    setStateGame((prev) => ({ ...prev, wordCount: wordsArr }));
  }

  useEffect(() => {
    if (stateGame.timeRemaining > 0) {
      setTimeout(() => {
        setStateGame((prev) => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
        }));
      }, 1000);
    }
  }, [stateGame.timeRemaining]);

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
      />
      <h4>Time Remaining: {stateGame.timeRemaining}</h4>
      <button onClick={calculateWordCount}>start Game</button>
      <h1>
        Word Count:{stateGame.wordCount !== 0 ? stateGame.wordCount : "??"}{" "}
      </h1>
    </>
  );
}

export default App;
