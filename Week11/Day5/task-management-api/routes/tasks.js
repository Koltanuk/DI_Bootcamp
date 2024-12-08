const express = require('express');
const fs = require('fs');
const router = express.Router();

const tasksFilePath = './tasks.json';

const readTasks = () => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tasks:', error);
        return [];
    }
};


const writeTasks = (tasks) => {
    try {
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        throw new Error('Error writing tasks.');
    }
};


const generateId = (tasks) => {
    if (tasks.length === 0) return 1; 
    const maxId = Math.max(...tasks.map(task => task.id));
    return maxId + 1; 
};

// GET /tasks
router.get('/', (req, res) => {
    const tasks = readTasks();
    res.status(200).json(tasks);
});

// GET /tasks/:id
router.get('/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id, 10));

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
});

// POST /tasks
router.post('/', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const tasks = readTasks();
    const newTask = {
        id: generateId(tasks),
        title,
        description,
        completed: false,
    };

    tasks.push(newTask);
    writeTasks(tasks);

    res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
    const { title, description, completed } = req.body;
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id, 10));

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const updatedTask = { ...tasks[taskIndex], title, description, completed };
    tasks[taskIndex] = updatedTask;
    writeTasks(tasks);

    res.status(200).json(updatedTask);
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
    const tasks = readTasks();
    const filteredTasks = tasks.filter(t => t.id !== parseInt(req.params.id, 10));

    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({ message: 'Task not found' });
    }

    writeTasks(filteredTasks);
    res.status(200).json({ message: 'Task deleted successfully' });
});

module.exports = router;
