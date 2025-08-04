import {useState} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-8xl">{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
    </div>
  );
}

export default App;
