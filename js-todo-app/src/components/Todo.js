import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo({ text, todo, todos, setTodos }) {

    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const handleCompleted = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return{
                    ...item, completed: !item.completed,
                };
            }
        }));
    };

    return (
        <div className={`todo ${todo.completed ? "done" : ""}`}>
            <span className="todoItem">{text}</span>
            <div>
                <button onClick={handleCompleted} className="doneBtn">
                    <FontAwesomeIcon icon="check-square" />
                </button>
                <button onClick={handleDelete} className="trashBtn">
                    <FontAwesomeIcon icon="trash" />
                </button>
            </div>
        </div>
    )
};

export default Todo;
