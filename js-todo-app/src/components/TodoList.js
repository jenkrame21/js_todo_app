import React from 'react';
import Todo from './Todo';


function TodoList(props) {

    // Ability to clear todo(s) on todo list
    const handleClear = (event) => {
        event.preventDefault();
        // props.clear();
    };

    return (
        <div className="todoList">
            <h1>Todos List</h1>
            {props.state.todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggle={props.toggle} />
                )
            })}
            <button className="clearBtn" onClick={handleClear}>Delete All Done</button>
        </div>
    )
};

export default TodoList;
