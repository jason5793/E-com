import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Checkout = () => {
  return (
    <Container>
      <h2>Checkout</h2>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Button variant="success" type="submit">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};
export default Checkout;