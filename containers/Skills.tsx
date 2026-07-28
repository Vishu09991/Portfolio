import { Icon } from "@iconify/react";
import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "reactstrap";
import { skillsSection } from "../portfolio";
import ParticleField from "../components/ParticleField";
import { use3DTilt } from "../hooks/use3DTilt";

const SkillTile = ({ skill }: { skill: typeof skillsSection.skillsCategories[0]["skills"][0] }) => {
  const tileRef = use3DTilt<HTMLDivElement>({ maxTiltDeg: 12, scale: 1.06 });

  return (
    <div
      ref={tileRef}
      className="d-flex flex-column align-items-center justify-content-center p-3 m-2 text-center skill-card position-relative"
      style={{
        width: "115px",
        height: "115px",
        background: "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)",
        border: "1.5px solid rgba(17, 205, 239, 0.55)",
        borderTop: `3.5px solid ${skill.brandColor || "#11cdef"}`,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(17, 205, 239, 0.2)",
        borderRadius: "18px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
      }}
    >
      <div
        className="mb-2 d-flex align-items-center justify-content-center"
        style={{ fontSize: "2.2rem", height: "45px", overflow: "hidden" }}
      >
        <Icon icon={skill.iconifyTag} data-inline="false" />
      </div>
      <span
        className="text-white text-truncate w-100"
        style={{
          fontSize: "0.82rem",
          fontWeight: 600,
          fontFamily: "monospace, sans-serif",
          letterSpacing: "0.2px",
        }}
      >
        {skill.skillName}
      </span>
    </div>
  );
};

const renderCategoryBlock = (category: typeof skillsSection.skillsCategories[0], isCentered = false) => (
  <div className={`mb-4 px-2 ${isCentered ? "text-center" : ""}`}>
    <h3 className="h4 text-info mb-1 font-weight-bold">{category.title}</h3>
    <p className="text-white-50 small mb-3">{category.subTitle}</p>
    <div className={`d-flex flex-wrap ${isCentered ? "justify-content-center" : ""}`}>
      {category.skills.map((skill, skillIdx) => (
        <SkillTile key={skillIdx} skill={skill} />
      ))}
    </div>
  </div>
);


const Skills = () => {
  const categories = skillsSection.skillsCategories;

  return (
    skillsSection && (
      <section
        className="section section-lg position-relative"
        id="skills"
        style={{
          backgroundColor: "#090d16",
          backgroundImage: `
            radial-gradient(rgba(17, 205, 239, 0.12) 1.5px, transparent 1.5px),
            linear-gradient(180deg, #090d16 0%, rgba(15, 23, 42, 0.85) 15%, rgba(8, 12, 20, 0.95) 100%)
          `,
          backgroundSize: "24px 24px, 100% 100%",
          backgroundPosition: "0 0, 0 0",
          backgroundRepeat: "repeat, no-repeat",
          borderTop: "none",
          outline: "none",
          paddingTop: "4rem",
          paddingBottom: "7rem",
          overflow: "hidden",
          height: "auto",
          minHeight: "fit-content",
        }}
      >
        <ParticleField particleCount={80} />
        <Fade bottom duration={400}>
          <Container className="position-relative px-3 px-md-5" style={{ zIndex: 2, maxWidth: "1480px" }}>
            <div className="d-flex align-items-center px-3 mb-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="fa fa-code text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">{skillsSection.title}</h4>
                <p className="lead text-white-50">{skillsSection.subTitle}</p>
              </div>
            </div>

            {/* ROW 1: Full-width 3 Columns (Languages, Backend, Frontend) */}
            <Row className="mb-5 align-items-start g-4">
              <Col lg="4" md="6" className="mb-4 mb-lg-0">
                {renderCategoryBlock(categories[0])}
              </Col>
              <Col lg="4" md="6" className="mb-4 mb-lg-0">
                {renderCategoryBlock(categories[1])}
              </Col>
              <Col lg="4" md="12" className="mb-4 mb-lg-0">
                {renderCategoryBlock(categories[2])}
              </Col>
            </Row>

            {/* ROW 2: Centered 2-Column Pair (Databases + Cloud & Tools side by side) */}
            <Row className="justify-content-center mb-4 g-4">
              <Col lg="5" md="6" className="mb-4 mb-lg-0">
                {renderCategoryBlock(categories[3], true)}
              </Col>
              <Col lg="5" md="6" className="mb-4 mb-lg-0">
                {renderCategoryBlock(categories[4], true)}
              </Col>
            </Row>
          </Container>
        </Fade>

        {/* Smooth SVG Wave transition to Education section (dark #0B0F19) */}
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
              fill="#0B0F19"
            />
          </svg>
        </div>
      </section>
    )
  );
};

export default Skills;
