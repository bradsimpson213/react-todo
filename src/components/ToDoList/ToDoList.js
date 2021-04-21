import React from 'react';
import ToDo from "../ToDo/ToDo"
import './ToDoList.css';

const ToDoList = () => {
    const initialTodos = [
            { id: 1, task: "Clean Fishtank", completed: false },
            { id: 2, task: "Wash Car", completed: true },
            { id: 3, task: "Grow Beard", completed: false }
        ];

    return(
        <div>
            {initialTodos.map(todo => {
                return (
                    <ToDo 
                        key={todo.id} 
                        task={todo.task}
                        completed={todo.completed}
                    />
                )
            })}
        </div>      
    );

};

export default ToDoList;
