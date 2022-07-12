import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.css";
import $ from "jquery";
import { useContext } from "react";
import { DataContext } from "../../Modul/DataContext";
const Header = (props) => {
  const [user, setUser, showSignup, setShowSignup, loader, setLoader] =
    useContext(DataContext);
  return (
    <>
      <Navbar className="header">
        <Container>
          <div className="contact-me" onClick={() => setShowSignup(true)}>
            <p
              style={{
                backgroundColor: "#242424",
                width: "100%",
                height: "100%",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <label className="contact-text">Create new account</label>
            </p>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
