import { Icon } from "@iconify/react";
import React from "react";
import PortfolioSection from "../components/PortfolioSection";
import { skillsSection } from "../portfolio";

const SkillTile = ({ skill }: { skill: (typeof skillsSection.skillsCategories)[0]["skills"][0] }) => {
  return (
    <div className="skill-card" style={{ borderTopColor: skill.brandColor }}>
      <div
        className="mb-2 d-flex align-items-center justify-content-center"
        style={{ fontSize: "2.2rem", height: "45px", overflow: "hidden" }}
      >
        <Icon icon={skill.iconifyTag} data-inline="false" />
      </div>
      <span
        className="text-white w-100"
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

const SkillCategory = ({ category }: { category: (typeof skillsSection.skillsCategories)[0] }) => (
  <div className="skill-category">
    <h3 className="h4 text-info mb-1 font-weight-bold">{category.title}</h3>
    <p className="text-white-50 small mb-3">{category.subTitle}</p>
    <div className="skill-tiles">
      {category.skills.map((skill, skillIdx) => (
        <SkillTile key={skillIdx} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => (
  <PortfolioSection id="skills" title={skillsSection.title} subtitle={skillsSection.subTitle} icon="fa fa-code">
    <div className="skills-grid">
      {skillsSection.skillsCategories.map(category => (
        <SkillCategory key={category.title} category={category} />
      ))}
    </div>
  </PortfolioSection>
);

export default Skills;
