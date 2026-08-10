const express = require("express");
const router = express.Router();

const { addTodo } = require("../Controllers/todoController");

router.post("/todos", addTodo);

module.exports = router;