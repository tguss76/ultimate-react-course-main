import { useState } from "react";

const Flowers = [
  {
    id: 1,
    name: "ros",
  },
  {
    id: 2,
    name: "tulpan",
  },
  {
    id: 3,
    name: "vitsippa",
  },
  {
    id: 3,
    name: "blåSippa",
  },
  {
    id: 3,
    name: "maskgros",
  },
];

function App() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [blommor, setBlommor] = useState(Flowers);

  function handleMoveText() {
    setRightText(leftText);
    setLeftText("");
  }

  function handleAddFlower(name) {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    setBlommor((flowers) => [...flowers, { id: crypto.randomUUID(), name }]);
  }

  return (
    <div className="App">
      <h1>Tomas project</h1>
      <LeftInput leftText={leftText} setLeftText={setLeftText} />
      <button className="button" onClick={handleMoveText}>
        ADD
      </button>
      <RightInput rightText={rightText} setRightText={setRightText} />
      <Blommor blommor={blommor} />
      {/* <AddFlower setBlommor={setBlommor} /> */}
      <AddFlower onAddFlower={handleAddFlower} />
    </div>
  );
}

// diffrent why to write a fumction
const LeftInput = ({ leftText, setLeftText }) => {
  return (
    <input value={leftText} onChange={(e) => setLeftText(e.target.value)} />
  );
};

// const RightInput = ({ rightText, setRightText }) => (
//   <input value={rightText} onChange={(e) => setRightText(e.target.value)} />
// );

function RightInput({ rightText, setRightText }) {
  return (
    <input
      disabled
      value={rightText}
      onChange={(e) => setRightText(e.target.value)}
    />
  );
}

function AddFlower({ onAddFlower }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddFlower(name.trim());
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Flower name"
      />
      <button type="submit">Add flower</button>
    </form>
  );
}

function Blommor({ blommor }) {
  return (
    <ul>
      {blommor.map((blomma) => (
        <li key={blomma}>{blomma.name}</li>
      ))}
    </ul>
  );
}

export default App;
