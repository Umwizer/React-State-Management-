import { useState } from "react";
function App() {
  const [count, setCount] = useState(10);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Count = {count}</button>
    </div>
  );
}

export default App;
