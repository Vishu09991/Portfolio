import React, { ReactNode } from "react";
import { Container } from "reactstrap";
import { useSectionReveal } from "../hooks/useSectionReveal";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  children: ReactNode;
};

export default function PortfolioSection({ id, title, subtitle, icon, children }: Props) {
  const sectionRef = useSectionReveal();
  return (
    <section ref={sectionRef} id={id} className="portfolio-section" aria-labelledby={`${id}-title`}>
      <Container>
        <header className="section-heading">
          <span className="section-icon" aria-hidden="true">
            <i className={icon} />
          </span>
          <div>
            <h2 id={`${id}-title`}>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </header>
        {children}
      </Container>
    </section>
  );
}
