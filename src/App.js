import "./App.css";
import React, { Component } from "react";

class ConfessionText extends Component {
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
        <textarea
          type="text"
          placeholder="Make a confession..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      </form>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <button>Submit!</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <p>Confess here:</p>
      <ConfessionText />
      <Button />
    </div>
  );
}

export default App;
