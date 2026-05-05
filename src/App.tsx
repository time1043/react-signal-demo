import { useSignal } from "@preact/signals-react";
import Greeting from "./components/Greeting";
import { SignalInput } from "./components/SignalInput";

export default function App() {
  console.log("App render", Date.now());

  const inputValue = useSignal("");
  const name = useSignal("");

  return (
    <div>
      <h1>With Signals</h1>
      <label>
        Enter your name:
        <SignalInput value={inputValue} />
        <button onClick={() => (name.value = inputValue.value)}>
          Set Name
        </button>
      </label>
      <Greeting name={name} />
    </div>
  );
}
