const express = require("express");
const router = express.Router();

const {
    addTodo,
    getTodos
} = require("../Controllers/todoController");


// ADD TODO
router.post("/todos", addTodo);


// GET ALL TODOS
router.get("/todos", getTodos);


module.exports = router;