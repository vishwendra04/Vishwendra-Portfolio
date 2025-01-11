import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mamunuri Vishwendra Chary</span>
            from <span className="purple">Hyderabad, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science and Engineering from 
            <span className="purple"> National Institute of Technology, Bhopal (2022-2026)</span>.
            <br />
            I have a deep interest in programming and enjoy solving real-world problems 
            through technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe in continuous learning and building impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Vishwendra Chary</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
