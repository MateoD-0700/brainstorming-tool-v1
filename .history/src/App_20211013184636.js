import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const[todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState('')
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit = {handleSubmit}>
        <input type="text" onChange = {(e)=> 
          setTodo(e.target.value)} value = {todo}/>
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
