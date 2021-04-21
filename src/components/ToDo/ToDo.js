import React from 'react';
import './ToDo.css';

const ToDo = ({ task, completed }) => {

    return (
        <div className="todo">
            <span>{task}</span><span>{completed}</span>
        </div>
    );
};

export default ToDo;
