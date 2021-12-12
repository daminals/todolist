import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect }  from 'react'; // react manages state, not app, and i want to store todos to render
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // destructure array
  const [todos, setTodos] = useState([{id:1, name: "ur mom", complete: true}]) // when website first loads, we have an empty state
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) // access from local memory
    if (storedTodos) setTodos(storedTodos)
  }, []) // will only call once bc it is called whenever array changes, [] never changes. Only called on load

  useEffect(() => { // save to local storage so when refresh no disappear
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos] // in react, always make a copy before modifying state variable
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
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
