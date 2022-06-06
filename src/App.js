import "./App.css";
import { useState } from "react";

function App() {
  const [textArea, setTextArea] = useState("");

  console.log(textArea);

  function getKeyStrokes(e) {
    const { value } = e.target;
    setTextArea(value);
  }

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        name="textArea"
        value={textArea}
        placeholder="let me see those typing skills"
        onChange={getKeyStrokes}
      />
      <h4>Time Remaining</h4>
      <button>start Game</button>
      <h1>Word Count</h1>
    </>
  );
}

export default App;
