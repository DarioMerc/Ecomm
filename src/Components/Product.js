import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`product/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title as="h3">{product.name}</Card.Title>
        </Link>
        <Card.Text as="h4">${product.cost}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;