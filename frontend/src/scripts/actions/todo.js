import TodoApi from '../api/todo';

export const getAll = todos => ({
    type: 'GET_TODOS'
});

export const getAllSuccess = todos => ({
    type: 'GET_TODOS_SUCCESS',
    payload: todos
})

export const create = name => ({
    type: 'CREATE_TODO'
})

export const createSuccess = todo => ({
    type: 'CREATE_TODO_SUCCESS',
    payload: todo
})

export const fetchTodos = () => {
    return dispatch => {
        dispatch(getAll)
        return TodoApi.getTodos()
            .then(data => dispatch(getAllSuccess(data)))
            .catch(error => console.log("Request failed", error));
    }
}

export const createTodo = name => {
    return dispatch => {
        dispatch(create);
        return TodoApi.createTodo(name)
            .then(data => dispatch(createSuccess(data)))
            .catch(error => console.log("Request failed", error));
    }
}

// export const editTodo = (id, name) => ({
//     type: 'EDIT_TODO',
//     payload: { id, name }
// });

// export const deleteTodo = id => ({
//     type: 'DELETE_TODO',
//     payload: { id }
// });



