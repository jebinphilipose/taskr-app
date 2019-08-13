import React from 'react';

const Task = (props) => (
  <div>
    {props.taskText}
    <button className="button button--link" onClick={(e) => { props.handleDeleteTask(props.taskText); }}>Remove</button>
  </div>
);

export default Task;
