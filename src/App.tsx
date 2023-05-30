import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type TodoItem = {
  id: number,
  desc: string
}

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [input, setInput] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCheckboxChange = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newTodo: TodoItem = {
        id: todoList.length + 1,
        desc: input,
      };
      setTodoList([...todoList, newTodo]);
      setInput('');
    }
  };

  return (
    <div className="w-full h-full p-4">
    <div className="">
      <h2 className="text-4xl font-bold pb-6">Todo List</h2>
      <form onSubmit={handleFormSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-900">Input</label>
        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder="Todo item" required value={input} onChange={handleInputChange}/>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Todo</button>
      </form>
      <div className="mt-10">
        <p className="text-2xl mb-2">List</p>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-none">
          {todoList.map(todo => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                <span className="ml-2">{todo.desc}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
