import React from 'react';

function Todo(props) {
    return (
        <li
            className={props.todo.completed ? 'todo done' : 'todo'}
            onClick={() => {props.toggle(props.todo.id)}}
            key={props.todo.id}
        >
            <span>
                {props.todo.name}
            </span>
        </li>
    )
};

export default Todo;
