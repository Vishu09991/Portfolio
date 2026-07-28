import React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";
import { FeedbackType } from "../types/sections";
import { use3DTilt } from "../hooks/use3DTilt";

const FeedbackCard = ({ name, role, feedback }: FeedbackType) => {
  const cardRef = use3DTilt<HTMLDivElement>();

  return (
    <div ref={cardRef} className="w-100 h-100">
      <Card className="publication-card-glow shadow-lg border-0 w-100 h-100">
        <CardBody className="d-flex flex-column justify-content-between p-4">
          <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div
                className="icon icon-shape rounded-circle flex-shrink-0"
                style={{
                  background: "rgba(0, 229, 255, 0.15)",
                  border: "1px solid rgba(0, 229, 255, 0.4)",
                  width: "2.8rem",
                  height: "2.8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa fa-file-text-o" style={{ color: "#00e5ff", fontSize: "1.1rem" }} />
              </div>

              <Badge
                pill
                className="education-pill-date px-3 py-1.5"
                style={{ fontSize: "0.78rem", letterSpacing: "0.5px" }}
              >
                {role}
              </Badge>
            </div>

            <h5 className="font-weight-bold mb-3 text-white" style={{ fontSize: "1.2rem", lineHeight: "1.4" }}>
              {feedback}
            </h5>

            <p className="description mb-3" style={{ fontSize: "0.92rem", color: "#9ca3af" }}>
              <i className="fa fa-university mr-2" style={{ color: "#00e5ff" }} />
              <span style={{ color: "#e2e8f0", fontWeight: 500 }}>{name}</span>
            </p>
          </div>

          <div className="pt-3 mt-2" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <Button
              className="btn-icon btn-sm"
              style={{
                background: "rgba(0, 229, 255, 0.15)",
                border: "1px solid rgba(0, 229, 255, 0.4)",
                color: "#00e5ff",
                borderRadius: "10px",
              }}
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="IEEE Xplore Paper"
            >
              <span className="btn-inner--icon mr-1">
                <i className="fa fa-external-link" />
              </span>
              <span>IEEE Xplore Paper</span>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeedbackCard;


