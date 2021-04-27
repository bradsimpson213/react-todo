import React from 'react';
import './ToDo.css';

const ToDo = ({ id, task, completed, toggleComplete }) => {
    console.log(`Rerender on task #${id}`)

    return (
        <div className="todo">
            <span 
                style={ completed ? {textDecoration: 'line-through'} : {color: 'red'} } 
                className="task-name"
            >
                { task }
            </span>
            <div className="task-controls">
                <span className="task-completed">{ completed ? "✅" : "🚫" }</span>
                <button 
                    className="task-button"
                    onClick={ () => toggleComplete(id)}
                >
                    { completed ? 'Not Done' : 'Done'}
                </button>
            </div>
            
        </div>
    );
};

export default ToDo;
