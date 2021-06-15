import React, { useState } from 'react';

function TodoForm(props) {
    const [todo, setTodo] = useState('');

    // Ability to change input
    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    // Ability to submit todo to todo list
    const handleSubmit = (event) => {
        event.preventDefault();
        // props.add(todo);
        setTodo('');
    };

    // Ability to clear todo(s) on todo list
    const handleClear = (event) => {
        event.preventDefault();
        // props.clear();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="todo"
                name="todo"
                type="text"
                value={todo}
                placeholder="Enter Todo"
                onChange={handleChange}
            />
            <button className="addBtn">Add Todo</button>
            <button onClick={handleClear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
