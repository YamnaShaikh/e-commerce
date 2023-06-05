import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Action/cartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart } from "../Action/cartAction";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
// } from "react-bootstrap";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  

  // const userInfo = useSelector((state) => state.userInfo);
  // const users = userInfo.userInfo;

  const users = JSON.parse(localStorage.getItem("userInfo"))
  debugger;
  return (
    <div>
      <Table className="table table-light table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone#</th>
            <th>
              <tr>
              <th scope="col">Product </th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            {
              /* debugger; */
            }

            return (
              <>
                {console.log(users)}
                <tr className="table-light" key={user.userid}>
                  <td scope="row">{user.userid}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    {user.cartItems.map((item) => {
                      return (
                        <tr>
                        <td><img src={item.image} style={{with: '100px', height: '100px'}} /></td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                        </tr>
                      );
                    })}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderDetail;
