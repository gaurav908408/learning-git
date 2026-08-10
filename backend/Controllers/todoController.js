const Todo = require("../Models/Todo");

const addTodo = async (req, res) => {
    try {

        const { title } = req.body;

        const todo = await Todo.create({
            title: title
        });

        res.status(201).json({
            message: "Todo added successfully",
            todo: todo
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to add todo",
            error: error.message
        });

    }
};

module.exports = {
    addTodo
};