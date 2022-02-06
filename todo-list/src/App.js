import React, {useState} from 'react'
import './App.css';
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import Footer from './Components/Footer'
import data from './data.json'


function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  return (
    <div className='App'>
      <Header />
      <hr />
      <TodoList handleToggle={handleToggle} toDoList={toDoList}/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
