import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import ParticleField from "../components/ParticleField";

const Greetings = () => {
  const shapeRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    let reqId: number | null = null;

    const handleScroll = () => {
      if (reqId) cancelAnimationFrame(reqId);
      reqId = requestAnimationFrame(() => {
        if (shapeRef.current) {
          const scrolled = window.scrollY;
          // Smooth 0.35x background parallax speed
          shapeRef.current.style.transform = `translate3d(0, ${scrolled * 0.35}px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (reqId) cancelAnimationFrame(reqId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="position-relative">
        <section
          className="section section-lg section-shaped pb-5 position-relative"
          id="greetings"
          style={{
            background: "linear-gradient(150deg, #11cdef 0%, #1171ef 100%)",
            overflow: "hidden",
            height: "auto",
            minHeight: "fit-content",
          }}
        >
          <ParticleField particleCount={120} particleColor="255, 255, 255" />
          <div
            ref={shapeRef}
            className="shape shape-style-1 bg-gradient-info"
            style={{
              background: "linear-gradient(150deg, #11cdef 0%, #1171ef 100%)",
              willChange: "transform",
            }}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <Container className="py-lg-md d-flex position-relative" style={{ zIndex: 2 }}>
            <div className="col px-0">
              <Row>
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
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">See My Resume</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6">
                  <GreetingLottie animationPath="/lottie/coding.json" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* Faint white dot-pattern in bottom transition zone of Hero */}
          <div
            className="position-absolute w-100"
            style={{
              bottom: 0,
              left: 0,
              height: "180px",
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
              backgroundPosition: "0 0",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Smooth SVG Wave transition to Skills section */}
          <div className="position-absolute w-100" style={{ bottom: "-1px", left: 0, overflow: "hidden", lineHeight: 0, zIndex: 10 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              shapeRendering="geometricPrecision"
              style={{ position: "relative", display: "block", width: "100%", height: "92px", marginBottom: "-1px" }}
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0b101d" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#090d16" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M0,32 C360,96 1080,-16 1440,32 L1440,120 L0,120 Z"
                fill="url(#waveGradient)"
              />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
