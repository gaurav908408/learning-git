import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // EDIT STATES
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // API BASE URL
  const API_URL = import.meta.env.VITE_API_URL;

  // GET TODOS
  const getTodos = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/todos`
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
        `${API_URL}/api/todos`,
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

  // DELETE TODO
  const deleteTodo = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/todos/${id}`,
        {
          method: "DELETE"
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Todo deleted successfully");

        getTodos();
      } else {
        alert(data.message || "Failed to delete todo");
      }
    } catch (error) {
      console.log("Delete todo error:", error);
      alert("Failed to delete todo");
    }
  };

  // START EDIT
  const startEdit = (todo) => {
    setEditId(todo._id);
    setEditTitle(todo.title);
  };

  // UPDATE TODO
  const updateTodo = async (id) => {
    if (!editTitle.trim()) {
      alert("Todo title cannot be empty");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/todos/${id}`,
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

  // CANCEL EDIT
  const cancelEdit = () => {
    setEditId(null);
    setEditTitle("");
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

            <span>S.NO</span>

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


                {/* TODO */}

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

                    <>
                      <button
                        className="save-btn"
                        onClick={() =>
                          updateTodo(todo._id)
                        }
                      >
                        Save
                      </button>

                      <button
                        className="cancel-btn"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </>

                  ) : (

                    <>
                      <button
                        className="edit-btn"
                        onClick={() =>
                          startEdit(todo)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteTodo(todo._id)
                        }
                      >
                        Delete
                      </button>
                    </>

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