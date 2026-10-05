import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div>
      <TipCalc />
    </div>
  );
}

function TipCalc() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setPercentage1(0);
    setPercentage2(0);
    setBill("");
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <ServicePrecentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </ServicePrecentage>
      <ServicePrecentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like it?
      </ServicePrecentage>
      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <lable>How mutch was the bill</lable>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function ServicePrecentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>Satisfied (5%)</option>
        <option value={10}>Really good (10%)</option>
        <option value={20}>Excellent (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
