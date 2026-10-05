import { useState } from "react";

const numbers = [
  { number: 1, random: true, complete: false },
  { number: 2, random: true, complete: false },
  { number: 3, random: true, complete: false },
  { number: 4, random: true, complete: false },
  { number: 5, random: true, complete: false },
  { number: 6, random: true, complete: false },
  { number: 7, random: true, complete: false },
  { number: 8, random: true, complete: false },
  { number: 9, random: true, complete: false },
  { number: 10, random: false, complete: false },
];

function App() {
  const [items, setItems] = useState(numbers);
  const [number, setNumber] = useState(null);

  function showRandomNumber() {
    const availableNumbers = items.filter(
      (item) => item.random === true && item.complete === false,
    );

    console.log(availableNumbers);

    const selected =
      availableNumbers.length > 0
        ? availableNumbers[Math.floor(Math.random() * availableNumbers.length)]
        : items.findLast((item) => item.random === false);

    if (!selected) return;

    setNumber(selected.number);

    setItems((currentItems) => {
      console.log("Current items:", currentItems);

      return currentItems.map((item) =>
        item.number === selected.number ? { ...item, complete: true } : item,
      );
    });
  }

  return (
    <div>
      <p>{number ?? "Click to pick a number"}</p>
      <button onClick={showRandomNumber}>Randomize</button>
    </div>
  );
}

export default App;
