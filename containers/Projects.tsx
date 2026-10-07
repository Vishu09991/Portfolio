import React from "react";
import PortfolioSection from "../components/PortfolioSection";
import { projects } from "../portfolio";
import { Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
    projects && (
      <PortfolioSection id="projects" title="Projects" icon="fa fa-folder-open">
        <Row className="g-4 g-lg-5 align-items-stretch">
          {projects.map((data, i) => {
            return <ProjectsCard key={i} {...data} />;
          })}
        </Row>
      </PortfolioSection>
    )
  );
};

export default Projects;
