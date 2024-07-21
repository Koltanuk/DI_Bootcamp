class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, complete: false });
    }

    markTaskAsComplete(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.complete = true;
        }
    }

    listAllTasks() {
        return this.tasks;
    }
}

export default TodoList;