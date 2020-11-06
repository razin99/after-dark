import "./App.css";
import React from "react";
import { AllPosts } from "./components/AllPosts";
import { ConfessionForm } from "./components/ConfessionForm";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const POSTS = [
  { text: "abcd", date: "2020-10-23T05:19:27.020+00:00", _id: "5f9261" },
  { text: "efgh", date: "2020-10-24T05:19:27.020+00:00", _id: "5f9262" },
  { text: "ijkl", date: "2020-10-25T05:19:27.020+00:00", _id: "5f9263" },
  { text: "mnop", date: "2020-10-26T05:19:27.020+00:00", _id: "5f9264" },
  { text: "qrst", date: "2020-10-27T05:19:27.020+00:00", _id: "5f9265" },
];


function App() {
  return (
    <div id="app">
      <Router>
        <Route exact path="/">
          <p>Confess here:</p>
          <ConfessionForm />
        </Route>
        <Route exact path="/posts">
          <AllPosts posts={POSTS} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
