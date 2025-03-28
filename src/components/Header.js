import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`); // Redirect to search results page
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">E-com</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
        </Nav>
        {/* Search Bar */}
        <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search products..."
            className="me-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="outline-light">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
