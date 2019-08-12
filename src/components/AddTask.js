import React from 'react';

export default class AddTask extends React.Component {
  handleAddTask = (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value.trim();
    this.props.handleAddTask(task);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTask}>
          <input type="text" name="task"></input>
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}
