import React from 'react';

function Todo(props) {
    return (
        <span
            className={props.todo.completed ? 'todo done' : 'todo'}
            onClick={() => {props.toggle(props.todo.id)}}
            key={props.todo.id}
        >
            {props.todo.name}
        </span>
    )
};

export default Todo;
