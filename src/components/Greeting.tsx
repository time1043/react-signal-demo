import { type Signal, $ } from "use-signals";

export default function Greeting({ name }: { name: Signal.State<string> }) {
  console.log("Greeting render", Date.now());

  return (
    <p>
      Hello, <strong>{$(name)}!</strong>
    </p>
  );
}
