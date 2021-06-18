import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {

    // Removes all todos opposite of done === true
    const filterCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.done));
        // localStorage.removeItem('todos');
    };

    // Toggles between 'No Todos' if todos do not exist and shows 'Delete All Done' button when todos exist
    const toggleDeleteAllCompletedBtn = () => {
        if (!todos.length) {
            return <h3>No Todos</h3>
        }
        if (todos) {
            return <button onClick={filterCompletedTodos} className="clearBtn">Delete All Done</button>
        }
    };

    return (
        <div className="todoContainer">
            <h1>List of Todos</h1>
            <ul className="todoList">
                {todos.map((todo) => (
                    <Todo key={todo.id} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            {toggleDeleteAllCompletedBtn()}
            </ul>
        </div>
    )
};

export default TodoList;
