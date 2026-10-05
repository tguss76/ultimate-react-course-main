import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addItem(e) {
    e.preventDefault();

    if (!text.trim()) return;
    setTasks([...tasks, text.trim()]);
    setText("");
  }

  function deleteItem(taskToDelete) {
    setTasks(tasks.filter((task, i) => i !== taskToDelete));
  }

  return (
    <main className="App">
      <h1>Task list</h1>
      <form onSubmit={addItem}>
        <label htmlFor="task">New tasks</label>
        <div className="input-row">
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button type="button" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default App;
