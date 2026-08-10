import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/todos");

      const data = await response.json();

      if (response.ok) {
        setTodos(data.todos);
      } else {
        console.log(data.message);
      }

    } catch (error) {
      console.log("Failed to fetch todos:", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="app">
      <div className="todo-container">

        <h1>Todo App</h1>

        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter your todo..."
          />

          <button>Add Todo</button>
        </div>

        <div className="todo-table">

          <div className="table-header">
            <span>#</span>
            <span>Todo</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {todos.length === 0 ? (
            <div className="empty-message">
              No todos available
            </div>
          ) : (
            todos.map((todo, index) => (
              <div className="table-row" key={todo._id}>

                <span>{index + 1}</span>

                <span>{todo.title}</span>

                <span>
                  {todo.completed ? "Completed" : "Pending"}
                </span>

                <span>
                  Action
                </span>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default App;