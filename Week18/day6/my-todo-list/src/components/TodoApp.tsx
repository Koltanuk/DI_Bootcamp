import React, { useState } from 'react';
import { Todo } from '../types/Todo';
import List from './List';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = () => {
        const newTodo: Todo = {
            id: todos.length + 1,
            text: `New Todo ${Date.now()}`
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={addTodo}>Add Todo</button>
            <List
                items={todos}
                renderItem={(todo) => (
                    <span>
                        {todo.id}. {todo.text}
                    </span>
                )}
            />
        </div>
    );
};

export default TodoApp;