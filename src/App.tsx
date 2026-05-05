import { useState } from "react";
import Greeting from "./components/Greeting";

export default function App() {
  console.log("App render", Date.now());

  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>With React Compiler</h1>
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
