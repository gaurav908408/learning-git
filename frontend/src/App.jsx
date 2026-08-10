import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    if (!title.trim()) {
      alert("Please enter a todo");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Todo added successfully");
        setTitle("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add todo");
    }
  };

  return (
    <div className="app">
      <div className="todo-container">

        <h1>Todo App</h1>

        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter your todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button onClick={addTodo}>
            Add Todo
          </button>
        </div>

        <div className="todo-table">

          <div className="table-header">
            <span>#</span>
            <span>Todo</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          <div className="empty-message">
            No todos available
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;