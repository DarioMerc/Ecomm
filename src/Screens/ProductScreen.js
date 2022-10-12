import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";

const ProductScreen = ({ match }) => {
  console.log(this.props.match);
  const id = useParams().id;
  const product = products.find((p) => p._id === id);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;
