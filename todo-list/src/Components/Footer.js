import React from 'react'





export default function Footer({todoList, handleFilter}) {
    

    const filteredList = todoList.filter(todo => {
        return !todo.complete
    });


    return(
        <div className='footer-content'>
        <p className='length'>{filteredList.length} tasks</p>
        <div className='btn-container'>
        <button className='a-button' onClick={handleFilter}>Clear Completed</button>
        </div>
        </div>
    )
}