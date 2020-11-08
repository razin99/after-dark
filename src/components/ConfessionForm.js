import React, { Component } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

export class ConfessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      code: "",
      show: false,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
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
        this.setState({
          code: response.data.code,
          show: true,
        });
        console.log(this.state.code);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.text);
    this.setState({ text: "" });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({ text: "" });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <textarea
            className="form-control mb-3"
            type="text"
            placeholder="Make a confession..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <div>
            <button className="btn btn-primary mr-2" type="submit">
              Submit
            </button>
            <button className="btn btn-secondary" type="reset">
              Reset
            </button>
          </div>
        </form>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Callback code: {this.state.code}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Use this code if you want to remove your post</Modal.Body>
        </Modal>
      </>
    );
  }
}
