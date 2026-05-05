type InputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

export default function Input({ inputValue, setInputValue }: InputProps) {
  console.log("Input render", Date.now());

  return (
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
  );
}
