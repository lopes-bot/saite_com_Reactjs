import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  styleComplite() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through  " : "none",
    };
  }
  render() {
    const { task } = this.props;
    return (
      <div>
        <p style={this.styleComplite()}>
          {task.title}-{task.description}-{task.done}-{task.id}
          <input type="checkbox" />
          <button style={btnDelete}>x</button>
        </p>
      </div>
    );
  }
}

const btnDelete = {
  fontSize: "18px",
  background: "#ea2017",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default Task;
