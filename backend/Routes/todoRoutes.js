const express = require("express");

const router = express.Router();

const {
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo,
    completeTodo
} = require("../Controllers/todoController");


router.post("/todos", addTodo);

router.get("/todos", getTodos);

router.delete("/todos/:id", deleteTodo);

router.put("/todos/:id", updateTodo);

router.patch("/todos/:id/complete", completeTodo);


module.exports = router;