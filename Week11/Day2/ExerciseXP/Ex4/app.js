import TodoList from './todo.js';

const myTodoList = new TodoList();


myTodoList.addTask('Learn JavaScript');
myTodoList.addTask('Write a blog post');
myTodoList.addTask('Go for a run');


myTodoList.markTaskAsComplete('Learn JavaScript');


const tasks = myTodoList.listAllTasks();
tasks.forEach(task => {
    console.log(`Task: ${task.task}, Complete: ${task.complete}`);
});