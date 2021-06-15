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
            <button className="addBtn">Add</button>
        </form>
    )
}

export default TodoForm;
