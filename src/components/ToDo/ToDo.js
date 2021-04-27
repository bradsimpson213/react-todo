import React from 'react';
import './ToDo.css';

const ToDo = ({ id, task, completed, toggleComplete }) => {

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
                    { completed ? 'Incomplete' : 'Completed'}
                </button>
            </div>
            
        </div>
    );
};

export default ToDo;
