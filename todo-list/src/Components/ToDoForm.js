import React, {useState} from 'react'

export default function Form({addTask, handleClose}) {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
            setUserInput(e.currentTarget.value)
            console.log(userInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
        handleClose();
    }

return(
    <div>
        <form onSubmit={handleSubmit}>
        
        <input value={userInput} type="text" name="task-input" onChange={handleChange} 
        placeholder="Walk The Cat"/>
        
        <button>Submit</button>
        </form>
    </div>
)}