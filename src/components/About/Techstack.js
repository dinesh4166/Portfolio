import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiMysql, SiAmazonaws } from "react-icons/si";
import { FaRegChartBar } from "react-icons/fa";
import { SiPandas, SiNumpy } from "react-icons/si";
import { FaOpencart } from "react-icons/fa"; // Using a placeholder icon for OpenCV

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>

      {/* Machine Learning (represented by a chart icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <FaRegChartBar />
        <p>Machine Learning</p>
      </Col>

      {/* Deep Learning (represented by a chart icon as well) */}
      <Col xs={4} md={2} className="tech-icons">
        <FaRegChartBar />
        <p>Deep Learning</p>
      </Col>

      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p>MySQL</p>
      </Col>

      {/* AWS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p>AWS</p>
      </Col>

      {/* Pandas */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p>Pandas</p>
      </Col>

      {/* NumPy */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p>NumPy</p>
      </Col>

      {/* OpenCV */}
      <Col xs={4} md={2} className="tech-icons">
        <FaOpencart /> {/* Placeholder icon for OpenCV */}
        <p>OpenCV</p>
      </Col>
    </Row>
  );
}

export default Techstack;
