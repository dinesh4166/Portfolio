import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel } from "react-icons/si";
import { FaWindows } from "react-icons/fa"; // Import FaWindows for Windows

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Windows Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>

      {/* Visual Studio Code Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* Postman Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Slack Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>

      {/* Vercel Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
