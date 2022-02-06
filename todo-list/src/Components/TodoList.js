import React from 'react'
import ToDo from './Todo'


export default function TodoList({toDoList, handleToggle}) {
    return(
        <div className='list'>
            {toDoList.map(todo => {
                return(
                    <ToDo todo={todo} handleToggle={handleToggle} />
                )
            })}
            
        </div>
    );
};