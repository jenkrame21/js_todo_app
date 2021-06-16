import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {

    const handleClear = () => {
        
    };

    return (
        <div className="todoContainer">
            <h1>Todos List</h1>
            <ul className="todoList">
                {todos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
                <button className="clearBtn">Delete All Done</button>
            </ul>
        </div>
    )
};

export default TodoList;
