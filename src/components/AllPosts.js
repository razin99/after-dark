import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";

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
        <div className="mb-3">
          <Card className="text-center" bg="dark" text="white">
            <Card.Body>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                {date.toLocaleDateString()} {date.toLocaleTimeString()}
              </small>
            </Card.Footer>
          </Card>
        </div>
      );
    });

    return (
      <>
        {all.length === 0 ? (
          <div className="jumbotron">
            <h1 className="display-4">No posts yet</h1>
          </div>
        ) : (
          <>{all}</>
        )}
      </>
    );
  }
}
