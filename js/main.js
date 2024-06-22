
// Time
const dateTimeParagraph = document.querySelector('#time');
function updateDateTime() {
    const now = new Date();
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    dateTimeParagraph.textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);


import { getAllTasksOnHold } from './modules/onHold.js';
import { getAllTasksReady } from './modules/ready.js';
import { onHold, ready } from './components/task.js';

let main_onHold = document.querySelector('.main_onHold');
let main_ready = document.querySelector('.main_ready');

addEventListener('DOMContentLoaded', async() => {
    let tasksOnHold = await getAllTasksOnHold();
    let tasksReady = await getAllTasksReady();
    
    main_onHold.innerHTML = await onHold(tasksOnHold);
    main_ready.innerHTML = await ready(tasksReady);
});
