import "./App.css";

function App() {
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

          <div className="empty-message">
            No todos available
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;