import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
// import Message from "../component/Message";
import { addToCart } from '../Action/cartAction';

const CartScreen = () => {
//   const { id} = useParams();

  const dispatch = useDispatch();
 debugger
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
console.log(cartItems);
// const productList = useSelector((state) => state.productList.products);
// const cartItem = productList.filter((product) =>  String(product.id) === id);

//    debugger;
//   useEffect(() => {
//       dispatch(addToCart(cartItem));
//     }, [cartItem])

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems == undefined ? (
          <h2>
            Your cart is empty <Link to="/"> Go Back</Link>
          </h2>
        ) : (
            <ListGroup variant="flush">
            {Object.values(cartItems).map((item, i) => (
              <ListGroup.Item key={i}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                    //   onClick={() => removeFromCartHandler(data.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row> 
                </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default CartScreen;
