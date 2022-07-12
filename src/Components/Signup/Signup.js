import React from "react";
import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap";
import { DataContext } from "../../Modul/DataContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import fakeAuth from "fake-auth";
import "./Signup.css";

export default function Signup() {
  const [user, setUser, showSignup, setShowSignup, loader, setLoader] =
    useContext(DataContext);
  const [pass, setPass] = React.useState("none");
  const passStyle = { boxShadow: pass };
  const navigate = useNavigate();

  const handleClose = () => setShowSignup(false);
  const handleShow = () => setShowSignup(true);
  
  // This function to create new user using fake auth npm package
  const Signup = () => {
    let email = document.getElementById("signup-email").value,
      pass = document.getElementById("signup-password").value,
      name = document.getElementById("signup-name").value,
      confirmPass = document.getElementById("signup-confirm-password").value;
    if (email === "" || pass === "" || name === "") {
      alert("Please fill all the fields");
    } else if (pass != confirmPass) {
      alert("Password and confirm password does not match");
    } else {
      fakeAuth
        .signup(email, pass)
        .then((response) => {
          handleClose();
          const user = localStorage.setItem("user", response.user);
          setUser(user);
          console.log(response.user);
          navigate("./congrats", { replace: true });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  //This function to cheek password is it correct or not
  const CheckPassword = () => {
    let pass = document.getElementById("signup-password").value,
      confirmPass = document.getElementById("signup-confirm-password").value;
    if (pass == confirmPass) {
      return setPass("none");
    } else {
      return setPass("0 0 4px red");
    }
  };

  return (
    <div className="signup">
      <>
        <Modal show={showSignup} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create new Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="login-body">
              {/* Stack the columns on mobile by making one full-width and the other half-width */}
              <Row style={{ marginBottom: "10px" }}>
                <Col xs={12} md={3}>
                  <Form.Label htmlFor="inputPassword5">User Name:</Form.Label>
                </Col>
                <Col xs={12} md={9}>
                  <Form.Control
                    type="text"
                    id="signup-name"
                    aria-describedby="passwordHelpBlock"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs={12} md={3}>
                  <Form.Label htmlFor="inputPassword5">
                    Email Address:
                  </Form.Label>
                </Col>
                <Col xs={12} md={9}>
                  <Form.Control
                    type="text"
                    id="signup-email"
                    aria-describedby="passwordHelpBlock"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs={12} md={3}>
                  <Form.Label htmlFor="inputPassword5">
                    Phone Number:
                  </Form.Label>
                </Col>
                <Col xs={12} md={9}>
                  <Form.Control
                    type="text"
                    id="signup-phone"
                    aria-describedby="passwordHelpBlock"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs={12} md={3}>
                  <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
                </Col>
                <Col xs={12} md={9}>
                  <Form.Control
                    type="password"
                    id="signup-password"
                    aria-describedby="passwordHelpBlock"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs={12} md={3}>
                  <Form.Label htmlFor="inputPassword5">
                    Re-enter password:
                  </Form.Label>
                </Col>
                <Col xs={12} md={9}>
                  <Form.Control
                    onChange={CheckPassword}
                    style={passStyle}
                    type="password"
                    id="signup-confirm-password"
                    aria-describedby="passwordHelpBlock"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs={12} md={3}></Col>
                <Col xs={12} md={9}>
                  <Button
                    className="login-button"
                    variant="outline-info"
                    onClick={Signup}
                  >
                    Submit
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
