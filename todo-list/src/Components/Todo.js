import React from 'react'


export default function ToDo({todo, handleToggle}) {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    
    return (
        <div id={todo.id} onClick={handleClick} className={`todo-list ${todo.complete? 'strike':""}`} >
            {todo.task}
        </div>
    );
};