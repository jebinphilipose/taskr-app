import React from 'react';
import Header from './Header';
import Action from './Action';
import Tasks from './Tasks';
import AddTask from './AddTask';
import TaskModal from './TaskModal';

export default class TaskrApp extends React.Component {
  state = {
    tasks: [],
    selectedTask: undefined
  };

  handleDeleteTasks = () => {
    this.setState(() => ({ tasks: [] }));
  };

  handleDeleteTask = (taskToRemove) => {
    this.setState((prevState) => ({ tasks: prevState.tasks.filter((task) => task !== taskToRemove) }));
  };

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.tasks.length);
    this.setState(() => ({ selectedTask: this.state.tasks[randNum] }));
  };

  handleAddTask = (task) => {
    if (!task) {
      return 'Please fill in some text.'
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'Enter a unique value.'
    }
    this.setState((prevState) => ({ tasks: prevState.tasks.concat(task) }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedTask: undefined }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);
      // don't set tasks to null if it doesn't exist in localStorage
      if (tasks) {
        this.setState(() => ({ tasks }));
      }
    } catch (e) {
      // do nothing, fallback to default state
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const tasks = this.state.tasks;
    // only save to localStorage if state changes
    if (prevState.tasks.length !== tasks.length) {
      const json = JSON.stringify(tasks);
      localStorage.setItem('tasks', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  render() {
    const subtitle = 'Remember everything important';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasTasks={this.state.tasks.length > 0} handlePick={this.handlePick} />
          <div className="widget">
            <Tasks tasks={this.state.tasks} handleDeleteTasks={this.handleDeleteTasks} handleDeleteTask={this.handleDeleteTask} />
            <AddTask handleAddTask={this.handleAddTask} />
          </div>
        </div>
        <TaskModal selectedTask={this.state.selectedTask} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}
