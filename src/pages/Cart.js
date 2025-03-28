import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <Container>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - ${item.price}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default Cart;
