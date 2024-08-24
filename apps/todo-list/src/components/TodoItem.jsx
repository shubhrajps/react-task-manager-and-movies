import React from 'react';
import { motion } from 'framer-motion';
import { useTodos } from './TodoContext';

const TodoItem = ({ todo }) => {
    const { toggleTodo, removeTodo } = useTodos();

    return (
        <motion.div 
            className={`text-black flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.02 }}
        >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="text-red-500">Delete</button>
        </motion.div>
    );
};

export default TodoItem;
