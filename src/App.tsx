import { useState } from "react";
import Greeting from "./components/Greeting";

// When using useState to update state,
// the component and its entire subtree are re-rendered by default,
// even if the child component does not directly depend on the state.

export default function App() {
  console.log("App render", Date.now());

  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>With useState</h1>
      <label>
        Enter your name:
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => setName(inputValue)}>Set Name</button>
      </label>
      <Greeting name={name} />
    </div>
  );
}
