import React from "react";
import PortfolioSection from "../components/PortfolioSection";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Row, Col } from "reactstrap";

const Education = () => {
  return (
    educationInfo && (
      <PortfolioSection id="education" title="Education" icon="ni ni-books">
        <Row className="g-4 g-lg-5 align-items-stretch">
          {educationInfo.map(info => {
            return (
              <Col className="mb-4 d-flex" lg="6" key={info.schoolName}>
                <EducationCard {...info} />
              </Col>
            );
          })}
        </Row>
      </PortfolioSection>
    )
  );
};

export default Education;
