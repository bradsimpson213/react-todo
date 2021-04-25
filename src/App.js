import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ToDoList from "./components/ToDoList/ToDoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="app-text">Tasks to complete:</h2>
      <ToDoList />
    </div>
  );
};

export default App;
