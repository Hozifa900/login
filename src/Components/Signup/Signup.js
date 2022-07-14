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
  const [formData, setFormData] = React.useState({
    signup_email: "",
    signup_pass: "",
    signup_name: "",
    signup_phone: "",
    signup_repass: "",
  });

  const handleClose = async () => setShowSignup(false);
  const handleShow = () => setShowSignup(true);

  // This function to handel a change in field ...........................................................
  async function handleChange(e) {
    const data = { ...formData };
    data[e.target.id] = e.target.value;
    await setFormData({ ...data });
    if (e.target.id === "signup_repass") {
      CheckPassword();
    }
    console.log(formData);
  }

  // This function to create new user using fake auth npm package
  const Signup = () => {
    let email = formData.email,
      pass = formData.pass,
      name = formData.name,
      confirmPass = formData.repass,
      phone = formData.phone;
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
    let pass = document.getElementById("signup_pass").value,
      confirmPass = document.getElementById("signup_repass").value;
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
                    id="signup_name"
                    value={formData.id}
                    onChange={(e) => handleChange(e)}
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
                    id="signup_email"
                    value={formData.id}
                    onChange={(e) => handleChange(e)}
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
                    id="signup_phone"
                    value={formData.id}
                    onChange={(e) => handleChange(e)}
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
                    id="signup_pass"
                    value={formData.id}
                    onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
                    aria-describedby="passwordHelpBlock"
                    style={passStyle}
                    type="password"
                    id="signup_repass"
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
