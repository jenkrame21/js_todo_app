import React from 'react';

function TodoForm({ inputText, setInputText, setTodos, todos }) {

    // Ability to change input
    const handleInputText = (event) => {
        setInputText(event.target.value);
    };

    // Ability to submit todo to todo list
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.floor(Math.random() * 10000)
            }
        ]);
        setInputText('');
    };

    return (
        <form>
            <input
                id="todo"
                name="todo"
                type="text"
                value={inputText}
                placeholder="Enter Todo"
                onChange={handleInputText}
            />
            <button className="addBtn" onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default TodoForm;
