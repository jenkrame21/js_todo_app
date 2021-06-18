import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {

    // Removes all todos with done property of true
    const filterCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.done));
    };

    // Toggles between 'No Todos' h3 element and 'Delete All Done' button element
    const toggleDeleteAllCompletedBtn = () => {
        if (!todos.length) {
            return <h3>No Todos</h3>
        }
        if (todos) {
            return <button onClick={filterCompletedTodos} className='clearBtn'>Delete All Done</button>
        }
    };

    return (
        <div className='todoContainer'>
            <h1>List of Todos</h1>
            <ul className='todoList'>
                {todos.map((todo) => (
                    <Todo key={todo.id} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            {toggleDeleteAllCompletedBtn()}
            </ul>
        </div>
    )
};

export default TodoList;
