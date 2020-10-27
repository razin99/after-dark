import "./App.css";
import React, { Component } from "react";

class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Make a confession..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      </form>
    );
  }
}

function App() {
  return (
    <div>
      <p>Test</p>
      <MakePost />
    </div>
  );
}

export default App;
