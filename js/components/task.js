export const onHold = async(tasksOnHold) => {
    let plantilla = "";
    tasksOnHold.forEach(task => {
        plantilla += /*html*/ `
        <div class="onHold">
            <p>${task.task}</p>
            <div class="tasks">
                <img class="check" src="./storage/img/check.png" alt="check" data-id= ${task.id}>
                <img class="trash" src="./storage/img/trash.png" alt="trash" data-id= ${task.id}>
            </div>
        </div>`;
    });
    return plantilla;
}

export const ready = async(tasksReady) => {
    let plantilla = "";
    tasksReady.forEach(task => {
        plantilla += /*html*/ `
        <div class="ready">
            <del>${task.task}</del>
            <div class="tasks">
                <img class="check" src="./storage/img/check.png" alt="check" data-id= ${task.id}>
                <img class="trash" src="./storage/img/trash.png" alt="trash" data-id= ${task.id}>
            </div>
        </div>`;
    });
    return plantilla;
}