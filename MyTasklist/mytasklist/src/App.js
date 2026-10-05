import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addItem(e) {
    e.preventDefault();

    if (text.trim() === "") return;
    setTasks([...tasks, text.trim()]);
    setText("");
  }

  function deleteTaks(taskToDelete) {
    console.log(taskToDelete);
    setTasks(tasks.filter((_, index) => index !== taskToDelete));
  }

  return (
    <main className="App">
      <h1>Tomas Task list</h1>
      <form onSubmit={addItem}>
        <label htmlFor="task">New task</label>
        <div className="input-row">
          <input
            // id="task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="create a task"
          />
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button type="button" onClick={() => deleteTaks(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
