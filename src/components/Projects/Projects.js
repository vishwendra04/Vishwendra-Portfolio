import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eduTechImg from "../../Assets/Projects/eduTechImg.png";
import Gallery from "../../Assets/Projects/Gallery.png"
import randomPassImg from "../../Assets/Projects/password_gen.png";
import home from "../../Assets/Projects/Vishwendra_House.png";
import weather from "../../Assets/Projects/weather.png";
import cocomo from "../../Assets/Projects/COCOMO.png";
import news from "../../Assets/Projects/news-hub.png";
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
              imgPath={home}
              isBlog={false}
              title="VISHWENDRA DREAM HOMES"
              description="Developed Vishwendra Dream Homes using the MERN stack with JWT,Firebase, and Google OAuth for authentication. Features include CRUD operations, advanced search, image upload, profile management, and contacting landlords. Integrated Redux for state management.Responsive and user-friendly interface"
              ghLink="https://github.com/vishwendra04/VISHWENDRA-DREAM-HOMES"
              demoLink="https://vishwendra-dream-homes-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gallery}
              isBlog={false}
              title="VISHWENDRA GALLERY"
              description="Developed a full-stack Gallery App using the MERN stack with Redux, supporting CRUD operations, image uploads, and adding categories. Enhanced functionality with efficient data management, intuitive interface, and seamless user experience for easy navigation and organization."
              ghLink="https://github.com/vishwendra04/VISHWENDRA-GALLERY"
              demoLink="https://nimble-mermaid-661d31.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="RANDOM PASSWORD GENERATOR"
              description="One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink="https://github.com/vishwendra04/Random-password-generator"
              demoLink="https://vishwendra04.github.io/Random-password-generator/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduTechImg}
              isBlog={false}
              title="EduConnect"
              description="EduConnect is a cutting-edge educational platform built using the MERN stack (MongoDB, Express.js, React, Node.js), designed to revolutionize online learning. This platform offers a seamless, interactive, and engaging learning experience for students and educators alike. With features like real-time collaboration, personalized learning paths, advanced analytics, and an intuitive user interface, EduConnect bridges the gap between traditional classrooms and modern digital education. Whether you're looking to enhance your skills, share your knowledge, or connect with peers, EduConnect provides the tools and community to support your educational journey."
              demoLink="https://study-notion-edtech-frontend-pink.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WEATHER APP"
              description="Developed a fully responsive weather application using HTML, CSS, and JavaScript, designed to provide real-time weather updates for over 1,000 cities worldwide. The app integrates seamlessly with a weather API to display accurate data, including current temperature, humidity levels, cloud cover, and wind speed. With a sleek and intuitive user interface, it ensures accessibility across devices, offering a seamless experience for users. Features include location-based weather updates, city search functionality, and dynamic weather icons that adapt to current conditions. This project highlights a strong focus on front-end development and API integration to deliver practical, real-world functionality."
              ghLink="https://github.com/vishwendra04/Weather-API"
              demoLink="https://vishwendra04.github.io/Weather-API/"
              //  <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cocomo}
              isBlog={false}
              title="COCOMO 2 CALCULATOR"
              description="Developed a comprehensive COCOMO II Calculator web app designed to estimate software project effort, time, and cost efficiently. The application allows users to input project size (KLOC), scale factors, and effort multipliers, providing real-time results with dynamic visualizations. Built using React.js for the front-end and Node.js for the back-end, it features a user-friendly interface, customizable cost parameters, and support for exporting detailed reports. This tool enables accurate project planning and budgeting by offering flexibility and precision. With interactive graphs and intuitive design, the app is ideal for software engineers, project managers, and stakeholders to streamline project estimation processes effectively."
              ghLink="https://github.com/vishwendra04/COCOMO-2-CALCULATOR"
              demoLink="https://vishwendra04.github.io/COCOMO-2-CALCULATOR/"      
              // <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NEWS HUB APPLICATION"
              description="Developed a news Hub app, fetching and categorizing articles. Enhanced user experience with responsive design and intuitive interface, and integrated third-party APIs forreal-time updates."
              ghLink="https://github.com/vishwendra04/MODERN-NEWS-HUB-APP"
              demoLink="https://flourishing-douhua-b053ad.netlify.app/"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
