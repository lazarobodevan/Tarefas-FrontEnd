
export const getTasks = () =>{
    return fetch('http://localhost:8080/tasks').then(t => t.json());
}

export const createTask = (taskName, taskDesc, taskPosition) =>{
    const body = {
        name: taskName,
        description: taskDesc,
        position: taskPosition,
    };

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
    console.log(body);

    return fetch('http://localhost:8080/tasks/', options);
}

export const updateTask = (id, taskName, taskDesc, position, taskStatus) =>{
    const body = {
        name: taskName,
        description: taskDesc,
        position: 10,
        status: taskStatus.toUpperCase()
    };

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }

    return fetch(`http://localhost:8080/tasks/${id}`, options).then(t => t.json());
}

export const deleteTask = (id) =>{
    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }

    return fetch(`http://localhost:8080/tasks/${id}`, options);
}
