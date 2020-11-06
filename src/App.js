import "./App.css";
import React from "react";
import { AllPosts } from "./components/AllPosts";
import { ConfessionForm } from "./components/ConfessionForm";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
    <div id="app">
      <Router>
        <Route exact path="/">
          <p>Confess here:</p>
          <ConfessionForm />
        </Route>
        <Route exact path="/posts">
          <AllPosts />
        </Route>
      </Router>
    </div>
  );
}

export default App;
