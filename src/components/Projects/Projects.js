import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Bisell"
              description="A Ecommerce website when you can buy and sell your products made with Django,react.js, Material-UI, and SQl. Have features which allows user for Buy cart and online payment options"
              ghLink="https://github.com/avinash1410-cyber/biSell"
              demoLink="https://bisell.netlify.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FreeFinance"
              description="A webiste on which u can buy the stocks and also can sell those stock along with this u can also hire a anothre perosn that can trade on behlaf of user made by Django, react js, SQL ."
              ghLink="https://github.com/avinash1410-cyber/FreeFinance"
              demoLink="https://social-trading.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MyVCchat"
              description="Developed a video chat web application with private room functionality made using Django, React.js, PostgreSQL, Heroku"
              ghLink="https://github.com/avinash1410-cyber/mychat"
              demoLink="http://8654340avinash.pythonanywhere.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BashDoard"
              description="Developed a Dashboard platform using DRF, React.js, Mongodb. Implemented features for filtering items on the basis of different parameters, resulting in a seamless user experience."
              ghLink="https://github.com/avinash1410-cyber/Dashboard"
              demoLink="https://bashdoard.netlify.app/dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
