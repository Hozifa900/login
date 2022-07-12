import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Congrats.css";
import { useNavigate } from "react-router-dom";
import data from "./data.json";
import Lottie from "lottie-react";

export default function Congrats() {
  const navigate = useNavigate();
  if (localStorage.getItem("user") === null) {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  }
  return (
    <div className="congrats">
      <Container fluid>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={12}>
            <div className="congrats-box">
              <div className="box-front">
                <div className="box-child">
                  <div>
                    <Lottie
                      animationData={data}
                      loop={true}
                      style={{
                        height: "300px",
                        width: "300px",
                      }}
                    />
                  </div>
                  <label className="child-text">Congratulations!</label>
                </div>
                <label className="sub-text">
                  You’ve successfully become our member now.
                </label>
                <label className="sub-text-link">Let’s Meet All Members</label>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
