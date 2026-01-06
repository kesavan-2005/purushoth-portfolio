import React, { useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AppCSS from './App.css';

const App = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-transparent">
        <Container>
          <Navbar.Brand href="#home">Purushothaman S</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero min-vh-100 d-flex align-items-center">
        <Container>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="text-center text-white">
            <motion.h1 animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="display-1 fw-bold">
              Purushothaman S
            </motion.h1>
            <p className="lead">Frontend Developer & UI/UX Designer</p>
            <a href="#about" className="btn btn-primary btn-lg">Explore My Work</a>
          </motion.div>
        </Container>
      </section>

      <section id="about" className="py-5 bg-light">
        <Container ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
          <Row>
            <Col md={8}>
              <motion.h2 variants={itemVariants} className="mb-4">About Me</motion.h2>
              <motion.p variants={itemVariants}>
                Skilled in frontend development using HTML, CSS, Bootstrap, JavaScript. Completed Data Analytics UI/UX Design Course at Novi Tech RD Private Limited and UI/UX internship at Vulture Lines Tech Management Private Limited. Passionate about software domain.
              </motion.p>
            </Col>
            <Col md={4}>
              <motion.div variants={itemVariants} className="text-center">
                <div className="profile-placeholder rounded-circle shadow mx-auto" style={{width: '200px', height: '200px', background: 'linear-gradient(45deg, #667eea, #764ba2)'}}></div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="py-5">
        <Container>
          <motion.h2 ref={ref} initial="hidden" animate={controls} className="text-center mb-5">Skills</motion.h2>
          <Row>
            {['HTML/CSS/Bootstrap', 'JavaScript', 'Java', 'Python Basics', 'UI/UX Design'].map((skill, idx) => (
              <Col md={3} key={idx} className="mb-4">
                <motion.div variants={itemVariants} className="skill-card p-4 text-center shadow hover-lift" whileHover={{ scale: 1.05 }}>
                  <h5>{skill}</h5>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="projects" className="py-5 bg-light">
        <Container>
          <motion.h2 className="text-center mb-5" ref={ref} initial="hidden" animate={controls}>Featured Project</motion.h2>
          <Row>
            <Col md={10} className="mx-auto">
              <motion.div variants={itemVariants} className="card shadow hover-lift">
                <div className="card-body">
                  <h3>Travel Management System</h3>
                  <p>Technologies: HTML, CSS, JavaScript, PHP, MySQL</p>
                  <p>Features centralized booking, itinerary management, expense tracking, real-time analysis, policy alerts, and reporting.</p>
                  <a href="https://github.com/Purushoth997" className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" className="btn btn-outline-primary">Live Demo</a>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5 bg-dark text-white">
        <Container>
          <motion.h2 className="text-center mb-5" ref={ref} initial="hidden" animate={controls}>Get In Touch</motion.h2>
          <Row className="text-center">
            <Col md={4}>
              <h5>📱 Phone</h5>
              <p><a href="tel:+916382452703" className="text-white">6382452703</a></p>
            </Col>
            <Col md={4}>
              <h5>✉️ Email</h5>
              <p><a href="mailto:purushotsekar25@gmail.com" className="text-white">purushotsekar25@gmail.com</a></p>
            </Col>
            <Col md={4}>
              <h5>🔗 Social</h5>
              <p>
                <a href="https://www.linkedin.com/in/purushothaman-s-2932252a3" className="text-white me-3">LinkedIn</a>
                <a href="https://github.com/Purushoth997" className="text-white">GitHub</a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default App;
