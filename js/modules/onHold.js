
export const getAllTasksOnHold = async() => {
    const url = "https://6675cabaa8d2b4d072f179da.mockapi.io/list";
    const options = { method: "GET" };

    let res = await fetch(url, options);
    let data = await res.json();
    let tasksOnHold = data.filter(task => task.status === "On hold");
    return tasksOnHold;
}

// POST
export const addTaskOnHold = async(task) => {
    const url = "https://6675cabaa8d2b4d072f179da.mockapi.io/list";
    const options = { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

// DELETE
export const deleteTaskOnHold = async(id) => {
    const url = `https://6675cabaa8d2b4d072f179da.mockapi.io/list/${id}`;
    const options = { 
        method: "DELETE",
        headers: {"content-type": "application/json"},
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

// PUT
export const changeStatusTask = async(id, status) => {
    const url = `https://6675cabaa8d2b4d072f179da.mockapi.io/list/${id}`;
    const options = { 
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({ status }),
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}