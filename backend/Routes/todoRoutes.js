const express = require("express");

const router = express.Router();

const {
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo
} = require("../Controllers/todoController");


// ADD TODO
router.post("/todos", addTodo);


// GET ALL TODOS
router.get("/todos", getTodos);


// DELETE TODO
router.delete("/todos/:id", deleteTodo);


// UPDATE TODO
router.put("/todos/:id", updateTodo);


module.exports = router;