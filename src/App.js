import "./App.css";
import React, { Component } from "react";

class AllPosts extends Component {
  render() {
    const all = [];

    this.props.posts.forEach((post) => {
      let date = new Date(Date.parse(post.date));
      all.push(
        <tr key={post._id}>
          <td>{post.text}</td>
          <td>{date.toLocaleDateString()}</td>
          <td>{date.toLocaleTimeString()}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>All confessions:</th>
          </tr>
        </thead>
        <tbody>{all}</tbody>
      </table>
    );
  }
}

const POSTS = [
  { text: "abcd", date: "2020-10-23T05:19:27.020+00:00", _id: "5f9261" },
  { text: "efgh", date: "2020-10-24T05:19:27.020+00:00", _id: "5f9262" },
  { text: "ijkl", date: "2020-10-25T05:19:27.020+00:00", _id: "5f9263" },
  { text: "mnop", date: "2020-10-26T05:19:27.020+00:00", _id: "5f9264" },
  { text: "qrst", date: "2020-10-27T05:19:27.020+00:00", _id: "5f9265" },
];

function App() {
  return (
    <div>
      <AllPosts posts={POSTS} />
    </div>
  );
}

export default App;
