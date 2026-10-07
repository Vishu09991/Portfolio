import { feedbacks } from "../portfolio";
import React from "react";
import PortfolioSection from "../components/PortfolioSection";
import { Col, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";

const Feedbacks = () => {
  return (
    feedbacks && (
      <PortfolioSection id="publications" title="Research and Publications" icon="fa fa-book">
        <Row className="g-3 justify-content-center">
          {feedbacks.map((data, i) => {
            return (
              <Col key={i} lg={feedbacks.length === 1 ? 8 : 6} md="10" className="d-flex mb-4">
                <FeedbackCard {...data} />
              </Col>
            );
          })}
        </Row>
      </PortfolioSection>
    )
  );
};

export default Feedbacks;
