import React, { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((task) => (
          <Task task={task} key={task.id} deleteTask={this.props.deleteTask} />
        ))}
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
