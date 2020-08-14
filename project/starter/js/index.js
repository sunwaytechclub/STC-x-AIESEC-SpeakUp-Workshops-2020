function createTask() {
    let input = document.querySelector('.task_input__input');
    let task = input.value;

    let Tasks = document.querySelector('.tasks');

    // create new element
    let Task = document.createElement('div');
    Task.className = 'task';

    let task_left = document.createElement('div');
    task_left.className = 'task__left';

    // For task left
    let task_left_img = document.createElement('img');
    task_left_img.src = "/images/circle_hollow.svg";
    task_left_img.className = 'task__left__image'
    task_left_img.onclick = checked;


    let task_left_desc = document.createElement('p');
    task_left_desc.innerText = task;
    task_left_desc.className = 'task__left__desc';

    // Insert task left elemements into Task
    task_left.appendChild(task_left_img);
    task_left.appendChild(task_left_desc);

    let delete_img = document.createElement('img');
    delete_img.src = "/images/delete.svg";
    delete_img.onclick = delete_task;

    // append task_left and delete img
    Task.appendChild(task_left);
    Task.appendChild(delete_img);

    let line = document.createElement('hr');
    line.className = 'line';

    Tasks.appendChild(Task);
    Tasks.appendChild(line);

    createTaskElement(task);
    update_status_task();
}

function checked(event) {
    let img = event.target;
    let src = img.src;

    let p = img.nextSibling;

    if (src.includes('/images/circle_hollow.svg')) {
        img.src = '/images/circle_ticked.svg';
        p.style.textDecoration = 'line-through';
    } else {
        img.src = '/images/circle_hollow.svg';
        p.style.textDecoration = 'none';
    }

    update_status_task();
}

function delete_task(event) {
    let img = event.target;
    let parent = img.parentNode;
    let line = parent.nextSibling;
    line.remove();
    parent.remove();


    update_status_task();
}

function update_status_task() {
    let status_task = document.querySelector('.status__active_task')
    let Tasks = document.querySelector('.tasks');
    let amount = 0;

    let tasks = Tasks.querySelectorAll('.task');

    for (let i = 0; i < tasks.length; i++) {
        let img = tasks[i].querySelector('.task__left__image');
        if (img.src.includes('/images/circle_hollow.svg')) {
            amount++;
        }
    }

    status_task.innerText = amount + " active tasks";
}
