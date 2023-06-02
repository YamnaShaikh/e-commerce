import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Action/cartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
import { addToCart } from "../Action/cartAction";
import AddUserInfo from "./AddUserInfo";

const CartScreen = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const { id} = useParams();

  const dispatch = useDispatch();
  // debugger;
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  console.log(cartItems);
  // const productList = useSelector((state) => state.productList.products);
  // const cartItem = productList.filter((product) =>  String(product.id) === id);

  //    debugger;
  //   useEffect(() => {
  //       dispatch(addToCart(cartItem));
  //     }, [cartItem])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // navigate("/aserInfo");
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems == undefined ? (
            <h2>
              Your cart is empty <Link to="/"> Go Back</Link>
            </h2>
          ) : (
            <ListGroup variant="flush">
              {cartItems?.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.product, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card className="checkOutCard">
            <ListGroup.Item variant="flush">
              <h2>
                Subtotal({cartItems.reduce((acc, item) => +acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block checkOutBtn btn-danger rounded"
                disabled={cartItems.length === 0}
                onClick={handleShow}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddUserInfo /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartScreen;
