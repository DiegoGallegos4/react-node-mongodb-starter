
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, createTodo } from '../actions/todo';

const Todo = () => {
    const [name, setName] = useState("");
    const { todos } = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const getTodos = useCallback(async () => {
        dispatch(fetchTodos());
    }, [dispatch])

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    return (
        <>
            <h3>Todos</h3>
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={() => dispatch(createTodo(name))}>Add</button>
            </div>
            <ul>
                {todos.map((todo, i) => <li key={i}>{todo.name}</li>)}
            </ul>
        </>
    );
}

export default Todo;