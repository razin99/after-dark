import React, { Component } from "react";
import axios from "axios";

export class RemovePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callback: "",
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ callback: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.callback);
    const code = this.state.callback;
    axios
      .delete("http://localhost:5000/posts/remove/" + code.toUpperCase())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ callback: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter code"
            onChange={this.handleTextChange}
            value={this.state.callback}
          />
          <button className="btn btn-primary" type="submit">
            Delete
          </button>
        </div>
      </form>
    );
  }
}
