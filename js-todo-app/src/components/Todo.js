import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo({ todo, todos, setTodos }) {
    
    // Removes todo by id
    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    // Toggles done property of each todo from todos from false to true
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

    return (
        <div key={todo.id} className={`todo ${todo.done ? 'done' : ''}`}>
            <span className='todoItem'>{todo.name}</span>
            <div>
                <button onClick={handleCompleted} className='doneBtn'>
                    <FontAwesomeIcon icon={todo.done ? 'check-square' : 'square'}/>
                </button>
                <button onClick={handleDelete} className='trashBtn'>
                    <FontAwesomeIcon icon='trash' />
                </button>
            </div>
        </div>
    )
};

export default Todo;
