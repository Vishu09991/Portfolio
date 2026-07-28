import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import ParticleField from "../components/ParticleField";

const Education = () => {
  return (
    educationInfo && (
      <section
        className="section section-lg m-0 position-relative"
        id="education"
        style={{
          background: "linear-gradient(135deg, #0B0F19 0%, #111827 100%)",
          paddingBottom: "7rem",
          overflow: "hidden",
          height: "auto",
          minHeight: "fit-content",
        }}
      >
        <ParticleField particleCount={80} particleColor="0, 229, 255" />
        <Fade bottom duration={400}>
          <Container className="position-relative px-3 px-md-5" style={{ zIndex: 2, maxWidth: "1480px" }}>

            <div className="d-flex align-items-center px-3 mb-5">
              <div>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle"
                  style={{
                    background: "rgba(0, 229, 255, 0.15)",
                    border: "1px solid rgba(0, 229, 255, 0.4)",
                    color: "#00e5ff",
                  }}
                >
                  <i className="ni ni-books" style={{ color: "#00e5ff" }} />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white mb-0" style={{ fontFamily: "monospace, sans-serif" }}>
                  Education
                </h4>
              </div>
            </div>
            <Row className="g-4 g-lg-5 align-items-stretch">
              {educationInfo.map((info) => {
                return (
                  <Col className="mb-4 d-flex" lg="6" key={info.schoolName}>
                    <EducationCard {...info} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Fade>
        {/* Smooth SVG Wave transition to Experience section (dark #0f172a) */}
        <div
          className="position-absolute w-100"
          style={{ bottom: "-1px", left: 0, overflow: "hidden", lineHeight: 0, zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
            style={{ position: "relative", display: "block", width: "100%", height: "92px", marginBottom: "-1px" }}
          >
            <path
              d="M0,32 C360,96 1080,-16 1440,32 L1440,120 L0,120 Z"
              fill="#0f172a"
            />
          </svg>
        </div>
      </section>
    )
  );
};


export default Education;

