import React from 'react';
import Task from './Task';

const Tasks = (props) => (
  <div>
    <button disabled={props.tasks.length === 0} onClick={props.handleDeleteTasks}>Remove all</button>
    {props.tasks.length === 0 && <p>Yay, you have no pending tasks!</p>}
    {
      props.tasks.map((task) => <Task key={task} taskText={task} />)
    }
  </div>
);

export default Tasks;
