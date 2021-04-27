import React, { useState } from 'react';
import ToDo from "../ToDo/ToDo"
import './ToDoList.css';

const ToDoList = () => {
    const initialTodos = [
            { id: 1, task: "Clean Fishtank", completed: false },
            { id: 2, task: "Wash Car", completed: true },
            { id: 3, task: "Grow Beard", completed: false },
            { id: 4, task: "Buy groceries", completed: false }
        ];
    const [todos, setTodos] = useState(initialTodos);

    const toggleComplete = (id) => {
        setTodos( todos.map( todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    return(
        <div className="todo-container">
            {todos.map(todo => {
                return (
                    <ToDo 
                        key={ todo.id }
                        id={ todo.id } 
                        task={ todo.task }
                        completed={ todo.completed }
                        toggleComplete={ toggleComplete }
                    />
                )
            })}
            <button className="new-todo-button">Add New Task</button>
        </div>      
    );

};

export default ToDoList;
