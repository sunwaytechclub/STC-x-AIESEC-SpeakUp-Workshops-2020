// Get the tasks div
let Tasks = document.querySelector('.tasks');

function createTask() {
    // Get the task text input
    let text_input = document.querySelector('.task_input__input');
    let text_input_value = text_input.value;

    // Create new Task
    let Task = createTaskElement(text_input_value);

    // Add the new Task to tasks div
    Tasks.appendChild(Task);
    let line = document.createElement('hr');
    line.className = 'line';
    Tasks.appendChild(line);

    // update task status
    update_tasks_status();
}

function createTaskElement(text) {
    // Create task div
    let task_div = document.createElement('div');
    task_div.className = 'task';

    // Create task left div
    let task_left_div = document.createElement('div');
    task_left_div.className = 'task__left';


    // Create delete image
    let task_delete_image = document.createElement('img');
    task_delete_image.src = '/images/delete.svg';
    task_delete_image.alt = 'delete';
    task_delete_image.className = 'task__delete__image';
    task_delete_image.onclick = delete_task;

    // Append task left div and delete image to task div
    task_div.appendChild(task_left_div);
    task_div.appendChild(task_delete_image);

    // Create circle image
    let task_left_image = document.createElement('img');
    task_left_image.src = '/images/circle_hollow.svg';
    task_left_image.alt = 'uncheck';
    task_left_image.className = 'task__left__image';
    task_left_image.onclick = check_task;

    // Create task left description
    let task_left_desc = document.createElement('p');
    task_left_desc.className = 'task__left__desc';
    task_left_desc.innerText = text;

    // Append circle image and task left description to task left div
    task_left_div.appendChild(task_left_image);
    task_left_div.appendChild(task_left_desc);

    return task_div;
}

function check_task(event) {
    // Get the image element
    let target = event.target;

    // Get the task description element
    let task_desc = target.nextSibling;

    // Change the target src image
    let src = target.src;
    if (src.includes('/images/circle_hollow.svg')) {
        // means task haven't completed
        target.src = '/images/circle_ticked.svg';
        task_desc.style.textDecoration = 'line-through';
    } else {
        // means task was completed
        target.src = '/images/circle_hollow.svg';
        task_desc.style.textDecoration = 'none';
    }

    // update task status
    update_tasks_status();
}

function delete_task(event) {
    // Get the button element
    let target = event.target;

    // Get the whole task element
    let Task = target.parentNode;

    // Get the line
    let line = Task.nextSibling;

    // Delete both in the Tasks div
    Tasks.removeChild(Task);
    Tasks.removeChild(line);

    // update task status
    update_tasks_status();
}

function update_tasks_status() {
    let children = Tasks.childNodes;
    let amount = 0;

    for (let child of children) {
        if (child.querySelector) {
            let image = child.querySelector('.task__left__image');

            // if image exists
            if (image) {
                // check if not complete yet
                let src = image.src;
                if (src.includes('/images/circle_hollow.svg')) {
                    // means task haven't completed
                    amount += 1;
                }
            }
        }
    }

    // Get status active task element
    let active_task = document.querySelector('.status__active_task');
    active_task.innerText = `${amount} active task(s) left.`;
}