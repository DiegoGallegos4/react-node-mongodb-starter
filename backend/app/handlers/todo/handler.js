const todoService = require('./service');

const getAllTodos = async (req, res, next) => {
    try {
        const todos = await todoService.get();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}

const createTodo = async (req, res, next) => {
    try {
        const { name } = req.body;
        const todo = await todoService.create(name);
        return res.status(201).json(todo);
    } catch (err) {
        next(err);
    }
}

const getTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await todoService.getById(id)
        return res.json(todo);
    } catch (err) {
        next(err);
    }
}

const editTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const todo = await todoService.update(id, name);
        return res.status(200).json(todo);
    } catch (err) {
        next(err);
    }
}

const removeTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        await todoService.remove(id);
        return res.sendStatus(204)
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    editTodo,
    removeTodo
}