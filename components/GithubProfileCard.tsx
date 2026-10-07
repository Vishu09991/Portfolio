import React from "react";
import { Container, Row, Col } from "reactstrap";
import { socialLinks } from "../portfolio";

const GithubProfileCard = () => {
  return (
    <footer
      className="footer pt-5 pb-4 position-relative"
      style={{
        backgroundColor: "#080c14",
        borderTop: "none",
        color: "#ffffff",
        height: "auto",
        minHeight: "fit-content",
      }}
    >
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="py-4">
          {/* Column 1 — NAVIGATION */}
          <Col lg="3" md="6" className="mb-4 mb-lg-0">
            <h6
              className="text-info font-weight-bold mb-3"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontFamily: "monospace, sans-serif",
              }}
            >
              NAVIGATION
            </h6>
            <ul className="list-unstyled mb-0" style={{ fontSize: "0.92rem", lineHeight: "2.2" }}>
              <li>
                <a href="#greetings" className="text-white-50 footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white-50 footer-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white-50 footer-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white-50 footer-link">
                  Projects
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 2 — CONTACT */}
          <Col lg="4" md="6" className="mb-4 mb-lg-0">
            <h6
              className="text-info font-weight-bold mb-3"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontFamily: "monospace, sans-serif",
              }}
            >
              CONTACT
            </h6>
            <ul className="list-unstyled mb-0" style={{ fontSize: "0.92rem", lineHeight: "2.2" }}>
              {socialLinks.linkedin && (
                <li className="d-flex align-items-center mb-2">
                  <i className="fa fa-linkedin text-info mr-3" style={{ fontSize: "1.1rem", width: "18px" }} />
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-50 footer-link"
                  >
                    Vishnu Hari Sahal
                  </a>
                </li>
              )}
              {socialLinks.github && (
                <li className="d-flex align-items-center mb-2">
                  <i className="fa fa-github text-info mr-3" style={{ fontSize: "1.1rem", width: "18px" }} />
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-50 footer-link"
                  >
                    github.com/Vishu09991
                  </a>
                </li>
              )}
              <li className="d-flex align-items-center mb-2">
                <i className="fa fa-envelope text-info mr-3" style={{ fontSize: "1rem", width: "18px" }} />
                <a href="mailto:sahalvishnuhari237@gmail.com" className="text-white-50 footer-link">
                  sahalvishnuhari237@gmail.com
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3 — TERMINAL-STYLE INFO CARD */}
          <Col lg="5" md="12" className="mb-4 mb-lg-0">
            <div
              className="p-3 footer-info"
              style={{
                background: "linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
                border: "1px solid rgba(17, 205, 239, 0.4)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4), 0 0 12px rgba(17, 205, 239, 0.15)",
                borderRadius: "14px",
                fontFamily: "monospace, sans-serif",
              }}
            >
              <div
                className="d-flex align-items-center mb-2 pb-2"
                style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
              >
                <span
                  className="mr-2"
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#ff5f56",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                <span
                  className="mr-2"
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#ffbd2e",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#27c93f",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div className="text-info font-weight-bold mb-1" style={{ fontSize: "0.88rem" }}>
                &gt; about
              </div>
              <p className="text-white-50 mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                Full-Stack Dev | CS Student | Building scalable systems
              </p>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar Divider & Copyright */}
        <hr style={{ borderColor: "rgba(255, 255, 255, 0.1)", margin: "1.5rem 0 1.2rem 0" }} />
        <Row>
          <Col className="text-center">
            <span
              className="text-white-50"
              style={{
                fontFamily: "monospace, sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.5px",
              }}
            >
              © 2026 Vishnu Hari Sahal. All rights reserved.
            </span>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer-link {
          transition: color 0.2s ease, text-shadow 0.2s ease;
          text-decoration: none !important;
        }
        .footer-link:hover {
          color: #11cdef !important;
          text-shadow: 0 0 8px rgba(17, 205, 239, 0.4);
        }
      `}</style>
    </footer>
  );
};

export default GithubProfileCard;
