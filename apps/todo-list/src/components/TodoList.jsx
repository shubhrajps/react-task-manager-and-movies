import React from 'react';
import { useTodos } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useTodos();

    return (
        <div className="mt-4">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
