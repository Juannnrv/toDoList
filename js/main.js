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

import { addTaskOnHold, getAllTasksOnHold, deleteTaskOnHold, changeStatusTask } from './modules/onHold.js';
import { getAllTasksReady } from './modules/ready.js';
import { onHold, ready } from './components/task.js';

let main_onHold = document.querySelector('.main_onHold');
let main_ready = document.querySelector('.main_ready');
let search = document.querySelector('.search');

addEventListener('DOMContentLoaded', async () => {
    let tasksOnHold = await getAllTasksOnHold();
    let tasksReady = await getAllTasksReady();
    
    main_onHold.innerHTML = await onHold(tasksOnHold);
    main_ready.innerHTML = await ready(tasksReady);

    // POST
    search.addEventListener("change", async (e) => {
        let newTask = e.target.value;

        await addTaskOnHold({ task: newTask, status: "On hold" });
    
        tasksOnHold = await getAllTasksOnHold(); 
        main_onHold.innerHTML = await onHold(tasksOnHold);
    
        search.value = "";

        setTimeout(() => {
            location.reload();
        }, 10); 

    });

    // DELETE
    document.querySelectorAll('.trash').forEach(trashBtn => {
        trashBtn.addEventListener('click', async (e) => {
            let id = e.target.dataset.id;

            await deleteTaskOnHold(id);
            tasksOnHold = await getAllTasksOnHold();
            e.target.parentElement.parentElement.remove();

            setTimeout(() => {
                location.reload();
            }, 10); 
        });
    });

    // PUT  
    document.querySelectorAll('.check').forEach(checkBtn => {
        checkBtn.addEventListener('click', async (e) => {
            let id = e.target.dataset.id;
            await changeStatusTask(id, 'ready');
            
            let taskContainer = e.target.closest('.onHold');
                taskContainer.classList.remove('onHold');
                taskContainer.classList.add('ready');

            tasksOnHold = await getAllTasksOnHold(); 
            main_onHold.innerHTML = await onHold(tasksOnHold);

            setTimeout(() => {
                location.reload();
            }, 10); 
        });
    });

});
