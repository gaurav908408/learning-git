const express = require("express");

const router = express.Router();

const {
    addTodo,
    getTodos,
    deleteTodo
} = require("../Controllers/todoController");


// ADD TODO
router.post("/todos", addTodo);


// GET ALL TODOS
router.get("/todos", getTodos);


// DELETE TODO
router.delete("/todos/:id", deleteTodo);


module.exports = router;