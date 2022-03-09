import React, {useState} from 'react'
import { Input, Button, Box} from '@chakra-ui/react'

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
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
        
        <Input value={userInput} type="text" name="task-input" onChange={handleChange} 
        placeholder="Walk The Cat"/>
        <Box ml='300px' mt='15px'>
        <Button type='submit'>Submit</Button>
        </Box>
        </form>
    </div>
)}