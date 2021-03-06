import { Col, Button, Container, Row } from "react-bootstrap";
import "./Cart.css";

function Cart() {
  return (
    
      <div className=" cart">
        <Container>
          <Row>
            <Button>Options</Button>
            <h4 className="text-center">cart</h4>
            <Button>Delete</Button>
          </Row>
        </Container>

        <Container className="bg-white rounded my-2">
        <Row>
          <h5>Add customer</h5>
          <Button>Add</Button>
          </Row>
        </Container>

        <div className="rounded">
          <h5>cards</h5>
        </div>

        <Button variant="success" size="lg" block className="pb-2">
          <h5 className="float-left">Total</h5>
          <h5 className="float-right">1000.00</h5>
        </Button>
      </div>
  );
}

export default Cart;
