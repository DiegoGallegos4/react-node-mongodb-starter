const express = require('express');
const router = express.Router();

const { getAllTodos,
    getTodo,
    createTodo, removeTodo, editTodo } = require('./handler');

router.get('/', getAllTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.put('/:id', editTodo);
router.delete('/:id', removeTodo);

module.exports = router;