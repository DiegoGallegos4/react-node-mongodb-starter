const request = (url, options = {}) => {
    return fetch(url, options).then(status)
}

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        if (response.status === 204) return 'OK';
        return response.json()
    } else {
        return Promise.reject(
            new Error(`Client error: ${response.statusText} ${response.status}`)
        );
    }
}

const baseURL = "";

const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
}

class TodoApi {
    static createTodo(name) {
        return request(`${baseURL}/api/v1/todo/`, {
            ...options,
            method: 'POST',
            body: JSON.stringify({ name })
        });
    }

    static editTodo(id, name) {
        return request(`${baseURL}/api/v1/todo/${id}`, {
            ...options,
            method: 'PUT',
            body: JSON.stringify({ name })
        });
    }

    static getTodo(id) {
        return request(`${baseURL}/api/v1/todo/${id}`, options);
    }

    static getTodos() {
        return request(`${baseURL}/api/v1/todo/`, options);
    }

    static deleteTodo(id) {
        return request(`${baseURL}/api/v1/todo/${id}`, {
            ...options,
            method: 'DELETE'
        });
    }
}

export default TodoApi;