import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";
import ParticleField from "../components/ParticleField";

const Projects = () => {
  return (
    projects && (
      <section
        className="section section-lg m-0 position-relative"
        id="projects"
        style={{
          backgroundColor: "#090d16",
          backgroundImage: `
            radial-gradient(rgba(17, 205, 239, 0.12) 1.5px, transparent 1.5px),
            linear-gradient(180deg, #090d16 0%, #0d1322 100%)
          `,
          backgroundSize: "24px 24px, 100% 100%",
          backgroundPosition: "0 0, 0 0",
          backgroundRepeat: "repeat, no-repeat",
          paddingTop: "4rem",
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
                  <i className="fa fa-folder-open" style={{ color: "#00e5ff" }} />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white mb-0" style={{ fontFamily: "monospace, sans-serif" }}>
                  Projects
                </h4>
              </div>
            </div>
            <Row className="g-4 g-lg-5 align-items-stretch">
              {projects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </Fade>
        {/* Smooth SVG Wave transition to Feedbacks section */}
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
              fill="#0d1322"
            />
          </svg>
        </div>
      </section>
    )
  );
};

export default Projects;


