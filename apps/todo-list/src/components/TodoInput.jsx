import React, { useState } from 'react';
import { useTodos } from './TodoContext';

const TodoInput = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-6">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                className="p-2 w-full border rounded-lg focus:outline-none"
                placeholder="Add a new task..."
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">Add</button>
        </form>
    );
};

export default TodoInput;
