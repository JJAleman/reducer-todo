import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';


function App() {
  return (
    <div className="App">
     <h1>Hello I'm the app!</h1>
     <TodoList />
     <TodoForm />
    </div>
  );
}

export default App;
