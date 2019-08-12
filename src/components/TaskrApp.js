import React from 'react';
import Header from './Header';
import Tasks from './Tasks';

export default class TaskrApp extends React.Component {
  state = {
    tasks: ['Task 1', 'Task 2', 'Task 3']
  };

  handleDeleteTasks = () => {
    this.setState(() => ({ tasks: [] }));
  };

  render() {
    const subtitle = 'Remember everything important';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Tasks tasks={this.state.tasks} handleDeleteTasks={this.handleDeleteTasks} />
      </div>
    );
  }
}
