
export const onHold = async(tasksOnHold) => {
    let plantilla = "";
    tasksOnHold.forEach(task => {
        plantilla += /*html*/ `
        <div class="onHold">
            <p>${task.task}</p>
            <div class="tasks">
                <img id="check" src="./storage/img/check.png" alt="check">
                <img id="trash" src="./storage/img/trash.png" alt="trash">
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
                <img id="check" src="./storage/img/check.png" alt="check">
                <img id="trash" src="./storage/img/trash.png" alt="trash">
            </div>
        </div>`;
    });
    return plantilla;
}