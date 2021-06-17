import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoForm({ inputText, setInputText, setTodos, todos }) {
    const [errorMessage, setErrorMessage] = useState({});

    // Ability to change input
    const handleInputText = (event) => {
        setInputText(event.target.value);
    };

    // Ability to submit todo to todo list
    const handleClickSubmit = (event) => {
        // Prevents refreshing
        event.preventDefault();

        const isValid = formValidation();
        if(isValid) {
            // Creates 'todos' object in 'todos' array
            setTodos([
                ...todos, {
                    name: inputText,
                    done: false,
                    id: Math.floor(Math.random() * 10000)
                }
            ]);
            // Sets input to blank
            setInputText('');
        }
    };

    const formValidation = () => {
        const errorMessage = {};
        let isValid = true;

        if(inputText.length === 0) {
            errorMessage.noInputText = " Todo is required."
            isValid = false;
        }

        if(inputText.trim().length > 15){
            errorMessage.inputTextLong = " Todo is too long. Max characters is 15."
            isValid = false;
        }

        setErrorMessage(errorMessage);
        return isValid;
    };

    return (
        <form onSubmit={handleClickSubmit}>
            <input
                id='todo'
                name='todo'
                type='text'
                value={inputText}
                placeholder='Enter Todo'
                onChange={handleInputText}
            />
            <button className='addBtn'>Add</button>
            {Object.keys(errorMessage).map((key) => {
                return <p className="errorMessage" key={key} style={{color : 'red'}}>
                        <FontAwesomeIcon icon="exclamation-circle"/>
                        {errorMessage[key]}
                    </p>
            })}
        </form>
    )
}

export default TodoForm;
