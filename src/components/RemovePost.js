import React, { Component } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

export class RemovePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callback: "",
      show: false,
      is_success: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
        this.setState({
          show: true,
          is_success: true,
        });
      })
      .catch((err) => {
        this.setState({
          show: true,
          is_success: false,
        });
      });
    this.setState({ callback: "" });
  }

  render() {
    return (
      <>
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
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={true}
        >
          {this.state.is_success ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Deleted successfully</Modal.Title>
              </Modal.Header>
              <Modal.Body>👍👍👍</Modal.Body>
            </>
          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Invalid code</Modal.Title>
              </Modal.Header>
              <Modal.Body>If this is a mistake, contact the mods</Modal.Body>
            </>
          )}
        </Modal>
      </>
    );
  }
}
