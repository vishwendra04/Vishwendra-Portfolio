import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DISCOVER <span className="purple"> WHO I AM </span>
            </h1>
            <p className="home-about-body">
              Hi Everyone, I am <b className="purple">Mamunuri Vishwendra Chary</b> from{" "}
              <b className="purple">Hyderabad, India</b>.
              <br />
              I am currently pursuing <b className="purple">B.Tech</b> in{" "}
              <b className="purple">Computer Science and Engineering</b> at{" "}
              <b className="purple">National Institute of Technology, Bhopal (2022-2026)</b>.
              <br />
              <br />
              I have a deep interest in <b className="purple">programming</b> and enjoy solving real-world problems through{" "}
              <b className="purple">technology</b>.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                Exploring <b className="purple">New Technologies</b>
              </li>
              <li className="about-activity">
                Writing <b className="purple">Blogs</b>
              </li>
              <li className="about-activity">
                Playing <b className="purple">Chess</b>
              </li>
            </ul>
            <p style={{ color: "rgb(155 126 172)" }}>
              "Believe in continuous learning and building impactful solutions!"
            </p>
            <footer className="blockquote-footer">Vishwendra Chary</footer>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vishwendra04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vishwendra-chary-mamunuri-07972726b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vishwendra_2004/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
