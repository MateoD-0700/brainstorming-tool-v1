import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const[todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState('')
  return (
    <div className="App">
      <form>
        <input type="text" />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
