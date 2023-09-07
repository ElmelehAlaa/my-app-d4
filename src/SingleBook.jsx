import { Card } from "react-bootstrap";
import CommentArea from "./data/CommentArea";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 gy-5 ">
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
          className="m-auto"
        >
          <Card.Body>
            <Card.Img style={{ height: "300px", objectFit: "contain" }} variant="top" src={this.props.img} />
            <Card.Title className="fs-6">{this.props.title}</Card.Title>
            {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
