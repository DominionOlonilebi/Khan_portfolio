import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footers">
        <Row>
          <Col>
            <h6>Copyright &copy; 2024. All Right Reserved</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
