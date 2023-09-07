import { Card } from "react-bootstrap";
// import CommentArea from "./data/CommentArea";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 gy-5 ">
        <Card className="m-auto">
          <Card.Body>
            <Card.Img style={{ height: "300px", objectFit: "contain" }} variant="top" src={this.props.img} />
            <Card.Title className="fs-6">{this.props.title}</Card.Title>
            <Card.Title commentsprops={this.commentsprops} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default SingleBook;
