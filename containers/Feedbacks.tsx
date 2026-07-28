import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";
import ParticleField from "../components/ParticleField";

const Feedbacks = () => {
  return (
    feedbacks && (
      <section
        className="section section-lg m-0 position-relative"
        id="publications"
        style={{
          backgroundColor: "#0d1322",
          backgroundImage: `
            radial-gradient(rgba(17, 205, 239, 0.12) 1.5px, transparent 1.5px),
            linear-gradient(180deg, #0d1322 0%, #080c14 100%)
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
          <Container className="position-relative" style={{ zIndex: 2 }}>
            <div className="d-flex align-items-center px-3 mb-4">
              <div>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle"
                  style={{
                    background: "rgba(0, 229, 255, 0.15)",
                    border: "1px solid rgba(0, 229, 255, 0.4)",
                    color: "#00e5ff",
                  }}
                >
                  <i className="fa fa-book" style={{ color: "#00e5ff" }} />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white mb-0" style={{ fontFamily: "monospace, sans-serif" }}>
                  Research and Publications
                </h4>
              </div>
            </div>
            <Row className="g-3 justify-content-center">
              {feedbacks.map((data, i) => {
                return (
                  <Col key={i} lg={feedbacks.length === 1 ? 8 : 6} md="10" className="d-flex mb-4">
                    <FeedbackCard {...data} />
                  </Col>
                );
              })}
            </Row>

          </Container>
        </Fade>
        {/* Smooth SVG Wave transition to Footer (dark #080c14) */}
        <div className="position-absolute w-100" style={{ bottom: "-1px", left: 0, overflow: "hidden", lineHeight: 0, zIndex: 10 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
            style={{ position: "relative", display: "block", width: "100%", height: "92px", marginBottom: "-1px" }}
          >
            <path
              d="M0,32 C360,96 1080,-16 1440,32 L1440,120 L0,120 Z"
              fill="#080c14"
            />
          </svg>
        </div>
      </section>
    )
  );
};

export default Feedbacks;

