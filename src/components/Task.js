import React from 'react';

const Task = (props) => (
  <div className="task">
    <p className="task__text">{props.taskText}</p>
    <button className="button button--link" onClick={(e) => { props.handleDeleteTask(props.taskText); }}>Remove</button>
  </div>
);

export default Task;
