import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";  // A reusable product card component

// Dummy product data (replace with API call if needed)
const products = [
  { id: 1, name: "Smartphone", price: 500, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 100, image: "https://via.placeholder.com/150" },
];

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2>Search Results for "{searchQuery}"</h2>
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id} md={4}>
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Row>
    </Container>
  );
};

export default SearchResults;
