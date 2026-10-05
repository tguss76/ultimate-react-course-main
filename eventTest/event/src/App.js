import "./Styles.css";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
