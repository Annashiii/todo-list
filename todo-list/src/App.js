import React, {useState} from 'react'
import './App.css';
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import Footer from './Components/Footer'
import data from './data.json'
import Modal from './Components/Modal'
import TodoForm from './Components/ToDoForm'



function App() {
  const [toDoList, setToDoList] = useState(data);



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

const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}];
  setToDoList(copy);
}

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

  return (
  <div>
    <div className='App'>
      <Header />
      <hr />
      <TodoList handleToggle={handleToggle} toDoList={toDoList} handleFilter={handleFilter}/>
      <hr />
      <div className='app-footer'>
      <Footer handleFilter={handleFilter} todoList={toDoList} addTask={addTask}/>
      <Modal handleClickOpen={handleClickOpen} open={open} handleClose={handleClose}>
        <TodoForm addTask={addTask} handleClose={handleClose}/>
      </Modal>
      </div>
    </div>
  </div>
  );
}

export default App;
