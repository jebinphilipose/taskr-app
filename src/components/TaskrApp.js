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

  handleDeleteTask = (taskToRemove) => {
    this.setState((prevState) => ({ tasks: prevState.tasks.filter((task) => task !== taskToRemove) }));
  };

  render() {
    const subtitle = 'Remember everything important';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Tasks tasks={this.state.tasks} handleDeleteTasks={this.handleDeleteTasks} handleDeleteTask={this.handleDeleteTask} />
      </div>
    );
  }
}
