import { useState } from "react";
function NameList() {
  const [list, setList] = useState(["Ruth", "Jill", "John"]);
  const [names, setName] = useState("");
  const onAddName = () => {
    if (names.trim() == "") return;
    setList([...list, names]);
    setName("");
  };
  return (
    <div>
      <ul>
        {list.map((names) => (
          <li key={names}>{names}</li>
        ))}
      </ul>
      <input
        type="text"
        value={names}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>AddName</button>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(10);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Count = {count}</button>
      <NameList />
    </div>
  );
}

export default App;
