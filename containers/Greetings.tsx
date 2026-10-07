import React from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import HeroScene from "../components/HeroScene";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  return (
    <section className="hero-section" id="greetings">
      <Container className="py-lg-md d-flex position-relative" style={{ zIndex: 2 }}>
        <div className="col px-0">
          <Row className="align-items-center gy-5">
            <Col lg="6">
              <h1 className="display-3 text-white">{greetings.title + " "}</h1>
              <p className="lead text-white">{greetings.description}</p>
              {greetings.techStack && (
                <div className="d-flex flex-wrap my-3">
                  {greetings.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-pill text-white mr-2 mb-2 px-3 py-2"
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        boxShadow: "0 0 12px rgba(255, 255, 255, 0.3)",
                        borderRadius: "50rem",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <SocialLinks />
              {greetings.resumeLink && (
                <div className="btn-wrapper my-4">
                  <Button className="btn-white btn-icon mb-3 mb-sm-0 ml-1" color="default" href={greetings.resumeLink}>
                    <span className="btn-inner--icon mr-1">
                      <i className="fa fa-file" />
                    </span>
                    <span className="btn-inner--text">See My Resume</span>
                  </Button>
                </div>
              )}
            </Col>
            <Col lg="6" className="hero-art">
              <HeroScene />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Greetings;
