import React from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { DataContext } from "../../Modul/DataContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import fakeAuth from "fake-auth";
import $ from "jquery";
import "./Login.css";

export default function Login() {
  const [user, setUser, showSignup, setShowSignup, loader, setLoader] =
    useContext(DataContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ login_email: "", login_pass: "" });

  // This function to handel a change in field ...........................................................
  async function handleChange(e) {
    const data = { ...formData };
    data[e.target.id] = e.target.value;
    await setFormData({ ...data });
    console.log(formData);
  }

  // This function to login using fake auth npm package
  const Login = () => {
    let email = formData.login_email,
      pass = formData.login_password;
    if (email === "" || pass === "") {
      alert("Please fill all the fields");
    } else {
      fakeAuth
        .signin(email, pass)
        .then((response) => {
          setUser(response.user);
          window.localStorage.setItem("user", response.user);
          navigate("./congrats", { replace: true });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <div className="login">
      <Card>
        <Card.Body>
          <Card.Title>Login Form</Card.Title>
          <Container className="login-body">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row style={{ marginBottom: "10px" }}>
              <Col xs={12} md={3}>
                <Form.Label htmlFor="inputPassword5">Email:</Form.Label>
              </Col>
              <Col xs={12} md={9}>
                <Form.Control
                  type="text"
                  id="login_email"
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
                  id="login_pass"
                  value={formData.id}
                  onChange={(e) => handleChange(e)}
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
                  onClick={Login}
                >
                  Login
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
