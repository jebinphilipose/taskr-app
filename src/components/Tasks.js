import React from 'react';
import Task from './Task';

const Tasks = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Tasks</h3>
      <button className="button button--link" disabled={props.tasks.length === 0} onClick={props.handleDeleteTasks}>Remove all</button>
    </div>
    {props.tasks.length === 0 && <p className="widget__message">Yay, you have no pending tasks!</p>}
    {
      props.tasks.map((task) => <Task key={task} taskText={task} handleDeleteTask={props.handleDeleteTask} />)
    }
  </div>
);

export default Tasks;
