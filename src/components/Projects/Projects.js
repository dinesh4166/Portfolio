import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import disease from "../../Assets/Projects/disease.png";
import aadhar from "../../Assets/Projects/aadhar.jpeg";
import number from "../../Assets/Projects/number.jpeg";
import comparator from "../../Assets/Projects/comparator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aadhar}
              isBlog={false}
              title="Aadhar-Information-Parsing"
              description="🆔🔍 Aadhar-Information-Parsing – A Python tool to extract details like name, DOB, and address from Aadhar card images."
              ghLink="https://github.com/dinesh4166/Aadhar-Information-Parsing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comparator}
              isBlog={false}
              title="File-Comparator"
              description="📁🔍 A Python GUI tool to compare two files and highlight their differences."
              ghLink="https://github.com/dinesh4166/File-Comparator"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disease}
              isBlog={false}
              title="Disease-Prediction-ML"
              description="🧠💉Predict diseases from symptoms using machine learning classifiers."
              ghLink="https://github.com/dinesh4166/Disease-Prediction-ML"         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={number}
              isBlog={false}
              title="Numbers-to-words"
              description="🔢A smart Python utility that translates numbers into human-readable words using the Indian number system - supports Lakhs, Crores, negative values, and even decimal points!"
              ghLink="https://github.com/dinesh4166/Numbers-to-words"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
