import { memo } from "react";

function Greeting({ name }: { name: string }) {
  console.log("Greeting render", Date.now());

  return (
    <p>Hello, {name ? <strong>{name}!</strong> : <em>name not set...</em>}</p>
  );
}

export default memo(Greeting);
