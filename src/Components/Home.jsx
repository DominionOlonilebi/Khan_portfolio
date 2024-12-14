import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyTyped from "./MyTyped";

const Home = () => {
  return (
    <div id="home">
      <Container fluid className="home_container">
        <Container>
          <Row>
            <Col md={6} className="home_col">
              <h6>Hi there!</h6>
              <h1>
                I'm <span>Salman</span> Khan
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque fermentum dui faucibus in ornare quam.
              </p>
              <h4>
                Professional{" "}
                <span>
                  <MyTyped />{" "}
                </span>
              </h4>
            </Col>
            <Col md={6}>
              <img src="Images/img160.png" alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
