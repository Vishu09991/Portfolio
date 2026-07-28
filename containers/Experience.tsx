import React from "react";
import { experience } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";
import ParticleField from "../components/ParticleField";

const Experience = () => {
  return (
    experience && (
      <section
        className="section section-lg m-0 position-relative"
        id="experience"
        style={{
          backgroundColor: "#0f172a",
          backgroundImage: `
            radial-gradient(rgba(17, 205, 239, 0.12) 1.5px, transparent 1.5px),
            linear-gradient(180deg, #0f172a 0%, #090d16 100%)
          `,
          backgroundSize: "24px 24px, 100% 100%",
          backgroundPosition: "0 0, 0 0",
          backgroundRepeat: "repeat, no-repeat",
          paddingTop: "4rem",
          paddingBottom: "7rem",
          overflow: "hidden",
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
                  <i className="ni ni-briefcase-24" style={{ color: "#00e5ff" }} />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white mb-0" style={{ fontFamily: "monospace, sans-serif" }}>
                  Experience
                </h4>
              </div>
            </div>

            {/* Alternating Left-Right Two-Panel Rows */}
            {experience.map((data, index) => (
              <ExperienceCard key={data.company} {...data} index={index} />
            ))}
          </Container>
        </Fade>
        {/* Smooth SVG Wave transition to Projects section */}
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
              fill="#090d16"
            />
          </svg>
        </div>
      </section>
    )
  );
};

export default Experience;

