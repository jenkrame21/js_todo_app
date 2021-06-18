import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo({ todo, todos, setTodos }) {

    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const handleCompleted = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return{
                    ...item, done: !item.done,
                };
            } else {
                return item;
            }
        }));
    };

    // const handleToggle = () => {
    //     console.log(todos.done)
    //     if(todos.done === false){
    //         return <FontAwesomeIcon icon="square" />
    //     } else {
    //         return <FontAwesomeIcon icon="check-square" />
    //     }
    // }

    return (
        <div className={`todo ${todo.done ? "done" : ""}`}>
            <span className="todoItem">{todo.name}</span>
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
