import React from 'react'
import ToDo from './Todo'
import { Heading } from '@chakra-ui/react';

export default function TodoList({toDoList, handleToggle}) {
    return(
        <div className='list'>
            {toDoList.length > 0 ? 
            toDoList.map(todo => {
                return(
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            }) : <Heading fontFamily='Helvetica' pl='40px' pt='100px' color='gray.500' size='md'>Add a task to get started</Heading>}
            
        </div>
    );
};