import axios from "axios";
import React, { Component } from "react";

export class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/all")
      .then((response) => {
        const all_posts = response.data;
        this.setState({
          posts: all_posts,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const all = [];

    this.state.posts.forEach((post) => {
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
      <>
      { all.length === 0 ?
      <h2>No posts</h2>
      :
        <table>
          <thead>
            <tr>
              <th>All confessions:</th>
            </tr>
          </thead>
          <tbody>{all}</tbody>
        </table>
      }
      </>
    );
  }
}
