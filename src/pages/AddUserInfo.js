import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { addUserInfo } from "../Action/addUserInfo";

import { addToCart } from "../Action/cartAction";

import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";

const AddUserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("phone Name is required"),
  });

  const initialValues = {
    userid: Date.now(),
    name: "",
    email: "",
    phone: "",
    cartItems: cartItems,
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addUserInfo(values));
    alert("Successfully Submitted");
    navigate("/orderdetails");
    resetForm();
  };
  return (
    <div className="container">
      <div className="employeeform">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="formField">
              <br />
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="form-control  "
              />
              <ErrorMessage
                name="name"
                component="span"
                className="error errMsg"
              />
            </div>
            <span></span>
            <br />
            <div className="formField">
              <Field
                type="text"
                className="form-control "
                id="exampleInputEmail1"
                name="email"
                placeholder="Enter Email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="error errMsg"
              />
              <span></span>
            </div>

            <div className="formField">
              <br />
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone#"
                className="form-control formField"
              />
              <ErrorMessage
                name="phone"
                component="span"
                className="error errMsg"
              />
            </div>
            <span></span>

            <br />
            <Row>
              <Col md={8}>
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
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={3}>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={2}>${item.price}</Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Col>
            </Row>

            <Button className="btn btn-lg btn-success" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddUserInfo;
