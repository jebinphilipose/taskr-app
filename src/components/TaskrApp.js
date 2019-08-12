import React from 'react';
import Header from './Header';
import Action from './Action';
import Tasks from './Tasks';
import AddTask from './AddTask';

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

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.tasks.length);
    alert(this.state.tasks[randNum]);
  };

  handleAddTask = (task) => {
    this.setState((prevState) => ({ tasks: prevState.tasks.concat(task) }));
  };

  render() {
    const subtitle = 'Remember everything important';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasTasks={this.state.tasks.length > 0} handlePick={this.handlePick} />
        <Tasks tasks={this.state.tasks} handleDeleteTasks={this.handleDeleteTasks} handleDeleteTask={this.handleDeleteTask} />
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}
