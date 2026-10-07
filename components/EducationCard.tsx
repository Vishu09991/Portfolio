import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <div className="w-100 h-100">
      <Card className="portfolio-card w-100 h-100">
        <CardBody className="d-flex flex-column justify-content-between card-content">
          <div>
            <h5 className="font-weight-bold mb-2 text-white" style={{ fontSize: "1.35rem", lineHeight: "1.35" }}>
              <span style={{ color: "var(--accent)" }}>{schoolName}</span>
            </h5>
            <h6 className="font-weight-semibold mb-3 text-white" style={{ fontSize: "1.05rem", opacity: 0.95 }}>
              {subHeader}
            </h6>
            <div className="d-flex flex-wrap align-items-center mb-3">
              <Badge
                pill
                className="education-pill-date px-3 py-2 mr-2 mb-2"
                style={{ fontSize: "0.8rem", letterSpacing: "0.5px" }}
              >
                {duration}
              </Badge>
              {grade && (
                <Badge
                  pill
                  className="education-pill-score px-3 py-2 mb-2"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.5px" }}
                >
                  {grade}
                </Badge>
              )}
            </div>
            {desc && (
              <p
                className="description mb-3"
                style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: "1.5" }}
              >
                <i className="fa fa-map-marker mr-1.5" style={{ color: "var(--accent)" }} /> {desc}
              </p>
            )}
            {descBullets && descBullets.length > 0 && (
              <ul className="pl-3 mb-0" style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: "1.6" }}>
                {descBullets.map((bullet, idx) => (
                  <li key={idx} className="mb-2">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EducationCard;
