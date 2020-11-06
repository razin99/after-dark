import React, { Component } from "react";
import axios from "axios";

export class ConfessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleTextChange(event) {
    event.preventDefault();
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/posts/add", {
        text: this.state.text,
      })
      .then((response) => {
        console.log(response.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.text);
    this.setState({
      text: "",
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <textarea
          type="text"
          placeholder="Make a confession..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <div>
          <button type="submit">Submit!</button>
          <button type="reset">Reset!</button>
        </div>
      </form>
    );
  }
}
