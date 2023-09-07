import { Component } from "react";
import { Card } from "react-bootstrap";
// import { Card } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    selected: false,
  };

  fetchBooks = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      //   console.log(this.state.commentsprops.book.asin);
      const response = await fetch(url + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE1NGMwMzRmZjAwMTQwM2Y1MzMiLCJpYXQiOjE2OTQwOTExNzEsImV4cCI6MTY5NTMwMDc3MX0.4iQCgMChdawJVCHs990aZB4de6Zn3GqodkDeRIIi9bM",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    console.log("didMount");
    this.fetchBooks();
  };
  render() {
    return (
      <Card.Title className="fs-6">
        {this.state.comments.map((comment) => (
          <div>
            <p>{comment.author}</p>
            <p>{comment.comment}</p>
            <p>{comment.rate}</p>
          </div>
        ))}
      </Card.Title>
    );
  }
}

export default CommentArea;
