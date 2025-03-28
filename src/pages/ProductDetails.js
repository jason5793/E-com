import React from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const products = [
  { id: 1, name: "Product 1", price: 20, image: "https://via.placeholder.com/150", description: "Description for Product 1" },
  { id: 2, name: "Product 2", price: 30, image: "https://via.placeholder.com/150", description: "Description for Product 2" },
];

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <Container>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <Button variant="primary" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductDetails;
