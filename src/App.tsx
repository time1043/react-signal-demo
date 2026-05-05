import { useCallback, useState, type ChangeEvent } from "react";
import Greeting from "./components/Greeting";

export default function App() {
  console.log("App render", Date.now());

  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
    [],
  );

  const handleSetName = useCallback(() => setName(inputValue), [inputValue]);

  return (
    <div>
      <h1>With useState + memo</h1>
      <label>
        Enter your name:
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSetName}>Set Name</button>
      </label>
      <Greeting name={name} />
    </div>
  );
}
