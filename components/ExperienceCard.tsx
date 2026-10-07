import React from "react";
import { Card, CardBody, Col, Row, Badge } from "reactstrap";
import { ExperienceType } from "../types/sections";

interface ExperienceCardProps extends ExperienceType {
  index?: number;
}

const ExperienceCard = ({
  companyLogo,
  company,
  role,
  date,
  desc,
  descBullets,
  tags,
  index = 0,
}: ExperienceCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <Row className={`align-items-stretch mb-5 g-4 ${!isEven ? "flex-lg-row-reverse" : ""}`}>
      {/* PANEL A: Company Card (Compact) */}
      <Col lg="4" className="d-flex mb-4 mb-lg-0">
        <div className="w-100 h-100">
          <Card className="portfolio-card w-100 h-100">
            <CardBody className="d-flex flex-column align-items-center justify-content-center text-center card-content">
              <div
                className="d-flex align-items-center justify-content-center mb-3 flex-shrink-0"
                style={{
                  width: "5.5rem",
                  height: "5.5rem",
                  borderRadius: "18px",
                  background: "rgba(0, 229, 255, 0.08)",
                  border: "1.5px solid rgba(0, 229, 255, 0.4)",
                  boxShadow: "0 0 20px rgba(0, 229, 255, 0.2)",
                  overflow: "hidden",
                }}
              >
                {companyLogo ? (
                  <img
                    src={companyLogo}
                    alt={company}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: "0.6rem",
                      backgroundColor: "#ffffff",
                    }}
                  />
                ) : (
                  <i className="ni ni-briefcase-24" style={{ color: "var(--accent)", fontSize: "2.2rem" }} />
                )}
              </div>

              <h5 className="font-weight-bold mb-2 text-white" style={{ fontSize: "1.3rem", lineHeight: "1.3" }}>
                <span style={{ color: "var(--accent)" }}>{company}</span>
              </h5>

              <p className="mb-0 text-muted" style={{ fontSize: "0.92rem", lineHeight: "1.4" }}>
                {role}
              </p>
            </CardBody>
          </Card>
        </div>
      </Col>

      {/* PANEL B: Details Card (Main Content) */}
      <Col lg="8" className="d-flex mb-4 mb-lg-0">
        <div className="w-100 h-100">
          <Card className="portfolio-card w-100 h-100">
            <CardBody className="d-flex flex-column justify-content-between card-content">
              <div>
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
                  <span
                    className="font-weight-bold text-uppercase"
                    style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "1px" }}
                  >
                    {company}
                  </span>
                  <span style={{ fontSize: "0.92rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    <i className="fa fa-calendar mr-2" style={{ color: "var(--accent)" }} />
                    {date}
                  </span>
                </div>

                <h4 className="font-weight-bold text-white mb-4" style={{ fontSize: "1.35rem", lineHeight: "1.35" }}>
                  {role}
                </h4>

                {desc ? (
                  <p className="description mb-3" style={{ fontSize: "0.98rem", color: "#cbd5e1", lineHeight: "1.6" }}>
                    {desc}
                  </p>
                ) : null}

                {descBullets && descBullets.length > 0 && (
                  <div className="mb-4">
                    <h6
                      className="font-weight-bold text-uppercase mb-2.5"
                      style={{ color: "var(--accent)", fontSize: "0.82rem", letterSpacing: "0.8px" }}
                    >
                      Key Achievements
                    </h6>
                    <ul className="pl-3 mb-0" style={{ fontSize: "0.98rem", color: "#cbd5e1", lineHeight: "1.6" }}>
                      {descBullets.map((bullet, idx) => (
                        <li key={idx} className="mb-2">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {tags && tags.length > 0 && (
                <div className="pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <h6
                    className="font-weight-bold text-uppercase mb-2.5"
                    style={{ color: "var(--accent)", fontSize: "0.82rem", letterSpacing: "0.8px" }}
                  >
                    Technologies & Tools
                  </h6>
                  <div className="d-flex flex-wrap">
                    {tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        pill
                        className="project-tech-pill px-3 py-1.5 mr-2 mb-2"
                        style={{ fontSize: "0.82rem", letterSpacing: "0.4px" }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default ExperienceCard;
