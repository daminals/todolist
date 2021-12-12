import logo from './logo.svg';
import './App.css';
import React, { useState, useRef }  from 'react'; // react manages state, not app, and i want to store todos to render
import TodoList from './TodoList';

function App() {
  // destructure array
  const [todos, setTodos] = useState([{id:1, name: "ur mom", complete: true}]) // when website first loads, we have an empty state
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return ( 
    <> {/* wrap return in empty <> so that i only return one */}
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>add todo</button>
    <button>clear completed</button>
    <div> 0 left to do lol </div>
    <br></br>

    <TodoList todos={todos} /> {/* // i can basically create my own component, so now todo list.js */}
    </>
  );
}

export default App;
