import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div className="port" id="portfolio">
      <Container>
        <h5>PORTFOLIO</h5>
        <Nav
          variant="pills"
          defaultActiveKey="/home"
          className="d-flex flex-row justify-content-center"
        >
          <Nav.Item>
            <Nav.Link href="/home" className="bg-dark">
              ALL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="portfolio">
            <Nav.Link href="/" className=" text-dark">
              BRANDING
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="portfolio">
            <Nav.Link href="/" className="text-dark">
              WEB DESIGN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="portfolio">git
            <Nav.Link href="/" className="text-dark">
              PHOTOGRAPHY
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="port_row">
          <Col md={4}>
            <h1>95%</h1>
            <h6>Branding</h6>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat totam nesciunt, at assumenda porro ipsum odit vitae pariatur mollitia asperiores, molestias, autem maiores architecto molestiae delectus modi amet libero eius.</p>
          </Col>
          <Col md={4}>
            <h1>98%</h1>
            <h6>Web Design</h6>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat totam nesciunt, at assumenda porro ipsum odit vitae pariatur mollitia asperiores, molestias, autem maiores architecto molestiae delectus modi amet libero eius.</p>
          </Col>
          <Col md={4}>
            <h1>90%</h1>
            <h6>Photography</h6>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat totam nesciunt, at assumenda porro ipsum odit vitae pariatur mollitia asperiores, molestias, autem maiores architecto molestiae delectus modi amet libero eius.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
