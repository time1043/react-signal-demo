import { $, Signal } from "use-signals";
import Greeting from "./components/Greeting";

// https://github.com/tc39/proposal-signals/blob/main/README.md#example---a-signals-counter
// https://github.com/proposal-signals/signal-polyfill
// https://github.com/dai-shi/use-signals

const signals = {
  name: new Signal.State("name not set"),
  inputValue: new Signal.State(""),
};

export default function App() {
  console.log("App render", Date.now());

  return (
    <div>
      <h1>With use-signals</h1>
      <label>
        Enter your name:
        <input
          value={$(signals.inputValue)}
          onChange={(e) => signals.inputValue.set(e.target.value)}
        />
        <button onClick={() => signals.name.set(signals.inputValue.get())}>
          Set Name
        </button>
      </label>
      <Greeting name={signals.name} />
    </div>
  );
}
