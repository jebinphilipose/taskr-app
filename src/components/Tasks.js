import React from 'react';
import Task from './Task';

const Tasks = (props) => (
  <div>
    {
      props.tasks.map((task) => <Task key={task} taskText={task} />)
    }
  </div>
);

export default Tasks;
