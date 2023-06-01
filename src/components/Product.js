import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    debugger;
  
  return (
    <div>
      <Card className="my-3 p-3 rounded" style={{ borderColor: "#d9534f" }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title as="div">
              <strong> {product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
