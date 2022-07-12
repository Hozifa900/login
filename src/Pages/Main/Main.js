import React from "react";
import Header from "../../Components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
import { DataContext } from "../../Modul/DataContext";
import data from "./data.json";
import Lottie from "lottie-react";
import Login from "../../Components/Login/Login";

export default function Main() {
  return (
    <div className="main">
      <a>Submitting</a>
      <Header />
      <Container style={{ marginTop: "100px" }}>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={6} style={{ position: "relative", height: "250px" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
                top: "0px",
                zIndex: "9",
              }}
            >
              <Lottie
                animationData={data}
                loop={true}
                style={{
                  height: "300px",
                  width: "300px",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={6} style={{ position: "relative", height: "400px" }}>
            <Login />
            hi
          </Col>
        </Row>
      </Container>
    </div>
  );
}
