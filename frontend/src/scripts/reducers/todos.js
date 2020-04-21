const initialState = {
    todos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "CREATE_TODO":
        case "GET_TODOS":
            return state;

        case "CREATE_TODO_SUCCESS":
        case "GET_TODOS_SUCCESS":
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            };

        // case "EDIT_TODO":
        //     return { ...state };

        // case "DELETE_TODO":
        //     return { ...state };

        default:
            return state;
    }
}