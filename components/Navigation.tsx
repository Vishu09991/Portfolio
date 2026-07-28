import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col, Button } from "reactstrap";

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
          <Container className="d-flex align-items-center justify-content-between">
            <NavbarBrand href="/" className="mr-0">
              <h2 className="text-white mb-0" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <div className="flex-grow-1 text-center d-none d-md-block px-3">
              <span
                className="text-white-50 font-weight-normal"
                style={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "0.85rem",
                  opacity: 0.85,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                SOFTWARE DEVELOPMENT ENGINEER
              </span>
            </div>
            <button className="navbar-toggler" aria-label="navbar_toggle" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {socialLinks.facebook && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Facebook"
                      className="nav-link-icon px-2"
                      href={socialLinks.facebook}
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" style={{ fontSize: "1.65rem" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2">Facebook</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.instagram && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Instagram"
                      className="nav-link-icon px-2"
                      href={socialLinks.instagram}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" style={{ fontSize: "1.65rem" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2">Instagram</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon px-2"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <i className="fa fa-github" style={{ fontSize: "1.65rem" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon px-2"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" style={{ fontSize: "1.65rem" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2">Linkedin</span>
                    </NavLink>
                  </NavItem>
                )}
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Email"
                    className="nav-link-icon px-2"
                    href="mailto:sahalvishnuhari237@gmail.com"
                  >
                    <i className="fa fa-envelope" style={{ fontSize: "1.55rem" }} />
                    <span className="nav-link-inner--text d-lg-none ml-2">Email</span>
                  </NavLink>
                </NavItem>
                {socialLinks.twitter && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Twitter"
                      className="nav-link-icon px-2"
                      href={socialLinks.twitter}
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" style={{ fontSize: "1.65rem" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2">Twitter</span>
                    </NavLink>
                  </NavItem>
                )}
                {greetings.resumeLink && (
                  <NavItem className="ml-lg-5 pl-lg-3 mt-2 mt-lg-0">
                    <Button
                      className="btn-icon btn-sm px-3.5 py-2 d-inline-flex align-items-center header-resume-btn"
                      style={{
                        background: "rgba(11, 15, 25, 0.75)",
                        border: "1.5px solid rgba(0, 229, 255, 0.6)",
                        borderRadius: "50rem",
                        color: "#00e5ff",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: "0.8px",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        boxShadow: "0 0 14px rgba(0, 229, 255, 0.35)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      href={greetings.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Resume"
                    >
                      <i className="fa fa-download mr-1.5" style={{ color: "#00e5ff", fontSize: "0.92rem" }} />
                      <span style={{ color: "#00e5ff" }}>RESUME</span>
                    </Button>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
