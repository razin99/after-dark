import "./App.css";
import React from "react";
import { AllPosts } from "./components/AllPosts";
import { ConfessionForm } from "./components/ConfessionForm";
import { RemovePost } from "./components/RemovePost";

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
    <div id="app">
      <Router>
        <Route exact path="/">
          <ConfessionForm />
        </Route>
        <Route exact path="/posts">
          <AllPosts />
        </Route>
        <Route exact path="/remove">
          <RemovePost />
        </Route>
      </Router>
    </div>
  );
}

export default App;
