import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import Footer from './Components/Footer'
import Modal from './Components/Modal'
import TodoForm from './Components/ToDoForm'
import { Box } from '@chakra-ui/react'



function App() {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem('toDoList')) || []
  )

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
  }, [toDoList])

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
        return !task.complete;
    });
    setToDoList(filtered);
}

const [open, setOpen] = React.useState(false);


const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}];
  setToDoList(copy);
}

  return (
  <Box display='flex' justifyContent='center' w='100vw' h='100vh' bgGradient='linear(to-r, #ffecd2, #fcb69f)'>
    <div className='App'>
      <Box>
      <Header />
      <hr />
      <TodoList handleToggle={handleToggle} toDoList={toDoList} handleFilter={handleFilter}/>
      <hr />
      <div className='app-footer'>
      <Footer handleFilter={handleFilter} todoList={toDoList} addTask={addTask}/>
      <Modal handleClickOpen={handleClickOpen} open={open} handleClose={handleClose}>
        <TodoForm addTask={addTask} handleClose={handleClose} />
      </Modal>
      </div>
      </Box>
    </div>
  </Box>
  );
}

export default App;
