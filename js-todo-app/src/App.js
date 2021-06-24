import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import React, { useState, useEffect } from 'react';
import "./components/FontAwesomeIcons/index";
import mainLogo from './images/checkd_white_logo-01.png';

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
      <header>
        <img src={mainLogo} alt="Checkd logo" className="mainLogo" />
        <h4>What Todos Will You Get Done Today?</h4>
      </header>
      <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <footer>
        <p>Checkd &#169; Jennifer Kramer 2021</p>
      </footer>
    </div>
  );
}

export default App;
