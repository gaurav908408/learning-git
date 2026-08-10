import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // GET TODOS
  const getTodos = async () => {
    try {

      const response = await fetch(
        "http://localhost:5000/api/todos"
      );

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


  // ADD TODO
  const addTodo = async () => {

    if (!title.trim()) {
      alert("Please enter a todo");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/todos",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            title: title
          })
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Todo added successfully");

        setTitle("");

        getTodos();

      } else {

        alert(data.message || "Failed to add todo");

      }

    } catch (error) {

      console.log("Add todo error:", error);

      alert("Failed to add todo");

    }
  };


  // GET TODOS WHEN PAGE LOADS
  useEffect(() => {
    getTodos();
  }, []);


  return (
    <div className="app">

      <div className="todo-container">

        <h1>Todo App</h1>


        {/* INPUT */}

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


        {/* TODO TABLE */}

        <div className="todo-table">

          {/* HEADER */}

          <div className="table-header">

            <span>#</span>

            <span>Todo</span>

            <span>Status</span>

            <span>Action</span>

          </div>


          {/* TODOS */}

          {todos.length === 0 ? (

            <div className="empty-message">
              No todos available
            </div>

          ) : (

            todos.map((todo, index) => (

              <div className="table-row" key={todo._id}>

                <span>
                  {index + 1}
                </span>

                <span>
                  {todo.title}
                </span>

                <span>
                  {todo.completed
                    ? "Completed"
                    : "Pending"
                  }
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