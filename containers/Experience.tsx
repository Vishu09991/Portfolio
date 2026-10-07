import React from "react";
import PortfolioSection from "../components/PortfolioSection";
import { experience } from "../portfolio";
import { Row, Col } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    experience && (
      <PortfolioSection id="experience" title="Experience" icon="ni ni-briefcase-24">
        {/* Alternating Left-Right Two-Panel Rows */}
        {experience.map((data, index) => (
          <ExperienceCard key={data.company} {...data} index={index} />
        ))}
      </PortfolioSection>
    )
  );
};

export default Experience;
