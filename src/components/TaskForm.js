import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  onChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="insira seu task "
          onChange={this.onChange}
          value={this.state.title}
          name="title"
        />
        <br />
        <br />
        <textarea
          placeholder="escreva a descrição"
          onChange={this.onChange}
          value={this.state.description}
          name="description"
        ></textarea>
        <input type="submit" />
      </form>
    );
  }
}

export default TaskForm;
