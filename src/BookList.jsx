import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    comments: [],
    selected: false,
  };
  fetchBooks = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/?";
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjE1NGMwMzRmZjAwMTQwM2Y1MzMiLCJpYXQiOjE2OTQwOTExNzEsImV4cCI6MTY5NTMwMDc3MX0.4iQCgMChdawJVCHs990aZB4de6Zn3GqodkDeRIIi9bM",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
      <div className="container">
        <div className="row">
          {this.props.array.map((book) => (
            <SingleBook book={book} title={book.title} img={book.img} key={book.asin}></SingleBook>
          ))}
        </div>
      </div>
    );
  }
}
export default BookList;
