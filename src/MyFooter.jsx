import { Container, Row } from "react-bootstrap";

const MyFooter = (props) => (
  <Container>
    <Row>
      <div className="col-4">
        <h6>Useful Links</h6>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className="col-4">
        <h6>NewsLetter</h6>
        <p>About</p>
        <p>ciao</p>
        <p></p>
      </div>
      <div className="col-4">
        <h6>Contacts</h6>
        <p>123,583, ABCD</p>
        <p>Italy</p>
        <p>Roma</p>
      </div>
    </Row>
  </Container>
);
export default MyFooter;
