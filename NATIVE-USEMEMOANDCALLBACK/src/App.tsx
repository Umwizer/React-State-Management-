import { useMemo, useState } from "react";

function App() {
  // This should be a string, not a string array
  const [numbers] = useState("10,20,30");

  // Memoized total as a number
  const total = useMemo(() => {
    const numberArray = numbers.split(",").map(Number);
    return numberArray.reduce((acc, number) => acc + number, 0);
  }, [numbers]);

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  // Memoized sortedNames as a string array
  const sortedNames = useMemo(() => {
    return [...names].sort();
  }, [names]);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>SortedNames: {sortedNames.join(", ")}</div>
    </>
  );
}

export default App;
