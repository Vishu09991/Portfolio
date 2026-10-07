import React from "react";
import { Card, CardBody, Col, Button, Badge } from "reactstrap";
import { ProjectType } from "../types/sections";
import ProjectArtwork from "./ProjectArtwork";

const getDomainIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("stock") || lower.includes("trading") || lower.includes("fintech")) {
    return "fa fa-line-chart";
  }
  if (lower.includes("risk") || lower.includes("prediction") || lower.includes("credit")) {
    return "fa fa-calculator";
  }
  if (lower.includes("billing") || lower.includes("epower") || lower.includes("power")) {
    return "fa fa-bolt";
  }
  return "fa fa-code";
};

const ProjectsCard = ({ name, desc, tags, descBullets, github, link }: ProjectType) => {
  const iconClass = getDomainIcon(name);
  const targetLink = link && !link.includes("#") ? link : github && !github.includes("#") ? github : "#";

  return (
    <Col xl="4" lg="6" md="6" className="d-flex mb-4">
      <div className="w-100 h-100 d-flex flex-column">
        <Card className="portfolio-card w-100 h-100 d-flex flex-column">
          <ProjectArtwork icon={iconClass} />
          <CardBody className="d-flex flex-column justify-content-between card-content h-100">
            <div className="d-flex flex-column flex-grow-1 mb-4">
              <div className="d-flex align-items-center mb-4">
                <div
                  className="icon icon-shape rounded-circle mr-3 flex-shrink-0"
                  style={{
                    background: "rgba(0, 229, 255, 0.15)",
                    border: "1px solid rgba(0, 229, 255, 0.4)",
                    width: "3.2rem",
                    height: "3.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className={`${iconClass}`} style={{ color: "var(--accent)", fontSize: "1.25rem" }} />
                </div>
                <h5 className="font-weight-bold mb-0 text-white" style={{ fontSize: "1.3rem", lineHeight: "1.35" }}>
                  {name}
                </h5>
              </div>

              {tags && tags.length > 0 && (
                <div className="d-flex flex-wrap mb-4">
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
              )}

              {desc ? (
                <p
                  className="description mb-3"
                  style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: "1.5" }}
                >
                  {desc}
                </p>
              ) : null}

              {descBullets && descBullets.length > 0 && (
                <ul className="pl-3 mb-0" style={{ fontSize: "0.98rem", color: "#cbd5e1", lineHeight: "1.65" }}>
                  {descBullets.map((bullet, idx) => (
                    <li key={idx} className={idx === descBullets.length - 1 ? "mb-0" : "mb-3"}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              className="d-flex justify-content-center pt-3.5 mt-auto"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
            >
              <Button
                className="btn-icon project-btn-glow px-4 py-2 d-inline-flex align-items-center"
                href={targetLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} Project`}
              >
                <span className="btn-inner--icon mr-2">
                  <i
                    className={targetLink.includes("github.com") ? "fa fa-github" : "fa fa-external-link"}
                    style={{ fontSize: "1.1rem" }}
                  />
                </span>
                <span>VIEW PROJECT</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default ProjectsCard;
