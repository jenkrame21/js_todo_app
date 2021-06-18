import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import React, { useState, useEffect } from 'react';
import "./components/FontAwesomeIcons/index";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  // Runs getLocalTodos once page loads
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Saves todos to local storage
  useEffect(() => {
    saveLocalTodos(todos);
  });

  // Grabs todos created in local storage
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  // Sets todos in local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };


  return (
    <div className="App">
      <h1>What Todos Will You Get Done Today?</h1>
      <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} saveLocalTodos={saveLocalTodos}/>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
