import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // EDIT STATES
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

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

  // UPDATE TODO
  const editTodo = async (id) => {
    if (!editTitle.trim()) {
      alert("Please enter a todo");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/todos/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            title: editTitle
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Todo updated successfully");

        setEditId(null);
        setEditTitle("");

        getTodos();
      } else {
        alert(data.message || "Failed to update todo");
      }
    } catch (error) {
      console.log("Update todo error:", error);
      alert("Failed to update todo");
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

              <div
                className="table-row"
                key={todo._id}
              >

                {/* NUMBER */}

                <span>
                  {index + 1}
                </span>


                {/* TODO TITLE */}

                <span>

                  {editId === todo._id ? (

                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) =>
                        setEditTitle(e.target.value)
                      }
                    />

                  ) : (

                    todo.title

                  )}

                </span>


                {/* STATUS */}

                <span>
                  {todo.completed
                    ? "Completed"
                    : "Pending"
                  }
                </span>


                {/* ACTION */}

                <span className="action-buttons">

                  {editId === todo._id ? (

                    <button
                      className="save-btn"
                      onClick={() =>
                        editTodo(todo._id)
                      }
                    >
                      Save
                    </button>

                  ) : (

                    <button
                      className="edit-btn"
                      onClick={() => {
                        setEditId(todo._id);
                        setEditTitle(todo.title);
                      }}
                    >
                      Edit
                    </button>

                  )}

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