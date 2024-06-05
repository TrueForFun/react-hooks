import { useState, useMemo } from "react";

function complexCompute(num) {
  console.log("complexComp");
  let i = 0;
  while (i < 10000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(0);
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);
  const [color, setColor] = useState(false);
  const styles = {
    color: color ? "red" : "green",
  };
  return (
    <div className="App">
      <h1 style={styles}>Number: {computed}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Plus</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Minus</button>
      <button onClick={() => setColor((prev) => !prev)}>Minus</button>
    </div>
  );
}

export default App;
