import type { Signal } from "@preact/signals-react";

export default function Greeting({ name }: { name: Signal<string> }) {
  console.log("Greeting render", Date.now());

  return (
    <p>
      Hello, {name.value ? <strong>{name}!</strong> : <em>name not set...</em>}
    </p>
  );
}
