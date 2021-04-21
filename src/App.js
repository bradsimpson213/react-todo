import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ToDoList from "./components/ToDoList/ToDoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToDoList />
    </div>
  );
};

export default App;
