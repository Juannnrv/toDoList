
export const getAllTasksOnHold = async() => {
    const url = "https://6675cabaa8d2b4d072f179da.mockapi.io/list";
    const options = { method: "GET" };

    let res = await fetch(url, options);
    let data = await res.json();
    let tasksOnHold = data.filter(task => task.status === "On hold");
    return tasksOnHold;
}