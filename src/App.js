import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react'; // react manages state, not app, and i want to store todos to render
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]) // when website first loads, we have an empty state
  return ( 
    <> {/* wrap return in empty <> so that i only return one */}
    <TodoList /> {/* // i can basically create my own component, so now todo list.js */}
    <input type="text" />
    <button>add todo</button>
    <button>clear completed</button>
    <div> 0 left to do lol </div>
    </>
  );
}

export default App;
