import { useState } from "react";
import "./App.css";

function App() {
  const [timeValue, setTimeValue] = useState(null);
  const handleChange = (e) => {
    setTimeValue(e.target.value);
  };

  return (
    <div className="App">
      <input value={timeValue} onChange={handleChange}></input>
      <h1>{timeValue}</h1>
    </div>
  );
}

export default App;
