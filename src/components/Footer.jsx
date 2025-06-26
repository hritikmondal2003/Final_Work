import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/Custom.css';

const Footer = () => {
  const whatsappUrl = 'https://wa.me/7407116275?text=Hi%20Hritik%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.';

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="copyright-text mb-0">
              &copy; {new Date().getFullYear()} Hritik Mondal. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/hritikmondal/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/hritikmondal2003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaWhatsapp />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
