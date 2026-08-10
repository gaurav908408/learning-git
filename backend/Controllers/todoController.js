const Todo = require("../Models/Todo");

// ADD TODO
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


// GET ALL TODOS
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();

        res.status(200).json({
            message: "Todos fetched successfully",
            todos: todos
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch todos",
            error: error.message
        });
    }
};


// DELETE TODO
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            message: "Todo deleted successfully",
            todo: todo
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete todo",
            error: error.message
        });
    }
};


// UPDATE TODO
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            id,
            {
                title: title,
                completed: completed
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            message: "Todo updated successfully",
            todo: todo
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update todo",
            error: error.message
        });
    }
};


// EXPORT
module.exports = {
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo
};