import './App.css'
import { TodoProvider } from './components/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  return (
    <TodoProvider>
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">My To-Do List</h1>
            <TodoInput />
            <TodoList />
        </div>
    </TodoProvider>
  )
}

export default App
