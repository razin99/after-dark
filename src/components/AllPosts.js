import React, { Component } from "react";

export class AllPosts extends Component {
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
