import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", price: 20, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 30, image: "https://via.placeholder.com/150" },
];

const Home = ({ addToCart }) => {
  return (
    <Container>
      <h2 className="text-center my-4">Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
              <ProductCard product={product} addToCart={addToCart} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;