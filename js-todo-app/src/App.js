import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import React, { useState } from 'react';
import "./components/FontAwesomeIcons/index";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
