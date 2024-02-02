import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <Container className="abt_container">
        <h5>WHO AM I</h5>
        <Row>
          <Col md={5}>
            <img src="Images/men3.jpg" alt="" className="img-fluid" />
          </Col>
          <Col md={7} sm={12}>
            <Card className="card-fluid px-3">
              <h3>
                Hi,
                <br /> Let's Introduce About Myself
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque fermentum dui faucibus in ornare quam.
              </p>
              <p>
                Quisque egestas diam in arcu cursus. Nisi est sit amet facilisis
                magna etiam tempor orci. Ipsum nunc aliquet bibendum enim
                facilisis. Fringilla urna porttitor rhoncus dolor purus non enim
                praesent. Nunc eget lorem dolor sed viverra ipsum nunc.
              </p>
              <Row className="cards_rows">
                <Col md={3}>
                  <h6>Name:</h6>
                </Col>
                <Col md={3}>
                  <p>Salman Khan</p>
                </Col>
                <Col md={3}>
                  <h6>Address:</h6>
                </Col>
                <Col md={3}>
                  <p>Market plaza, China</p>
                </Col>
              </Row>
              <Row className="cards_rows">
                <Col md={3}>
                  <h6>Email:</h6>
                </Col>
                <Col md={3}>
                  <p>contact@gmail.com</p>
                </Col>
                <Col md={3}>
                  <h6>Phone:</h6>
                </Col>
                <Col md={3}>
                  <p>+005 677 765 453</p>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Button variant="dark">Download CV</Button>
                  <Button variant="dark" className="mx-3">
                    Hire Me
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
