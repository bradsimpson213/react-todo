import React from 'react';
import './ToDo.css';

const ToDo = ({ task, completed }) => {

    return (
        <div className="todo">
            <span className="task-name">{ task }</span>
            <span className="task-completed">{ completed ? "✅" : "🚫" }</span>
        </div>
    );
};

export default ToDo;
