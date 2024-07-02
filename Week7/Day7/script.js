document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const startDateTime = document.getElementById('startDateTime').value;
    const endDateTime = document.getElementById('endDateTime').value;
    
    const newTask = {
        name,
        description,
        startDateTime,
        endDateTime,
        isCompleted: false
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks();
    document.getElementById('taskForm').reset();
});

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        const endDate = new Date(task.endDateTime);
        const currentDate = new Date();
        const remainingDays = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));

        taskElement.innerHTML = `
            <div>
                <strong>${task.name}</strong><br>
                Start Date: ${task.startDateTime}<br>
                Days Left: ${remainingDays}
                <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onclick="toggleTask(${index})">
                <button onclick="deleteTask(${index})">X</button>
                <button onclick="editTask(${index})">Edit</button>
                <div style="display: none;" id="desc${index}">${task.description}</div>
            </div>
        `;

        taskElement.style.backgroundColor = task.isCompleted ? 'green' : (remainingDays < 0 ? 'red' : 'yellow');
        taskElement.onclick = () => {
            const desc = document.getElementById(`desc${index}`);
            desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
        };

        taskList.appendChild(taskElement);
    });
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].isCompleted = !tasks[index].isCompleted;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    document.getElementById('name').value = task.name;
    document.getElementById('description').value = task.description;
    document.getElementById('startDateTime').value = task.startDateTime;
    document.getElementById('endDateTime').value = task.endDateTime;

    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

window.onload = displayTasks;
