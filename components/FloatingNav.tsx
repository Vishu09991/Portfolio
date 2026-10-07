import React from "react";
import { useAutoScroll } from "../hooks/useAutoScroll";

const FloatingNav = () => {
  const { isPlaying, toggleAutoScroll } = useAutoScroll(22);

  const scrollToSection = (id: string) => {
    if (id === "greetings") {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }
  };

  const navItems = [
    {
      id: "greetings",
      label: "About",
      icon: "fa fa-user",
    },
    {
      id: "skills",
      label: "Skills",
      icon: "fa fa-code",
    },
    {
      id: "experience",
      label: "Experience",
      icon: "fa fa-briefcase",
    },
    {
      id: "projects",
      label: "Projects",
      icon: "fa fa-folder-open",
    },
    {
      id: "publications",
      label: "Publications",
      icon: "fa fa-book",
    },
  ];

  return (
    <div className="floating-nav-bar">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          aria-label={item.label}
          title={item.label}
          className="floating-nav-btn"
        >
          <i className={`${item.icon}`} style={{ fontSize: "1.1rem" }} />
        </button>
      ))}

      {/* Auto-Scroll Toggle Button */}
      <button
        onClick={toggleAutoScroll}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause Auto-Scroll" : "Play Auto-Scroll"}
        title={isPlaying ? "Pause Auto-Scroll" : "Play Auto-Scroll"}
        className="floating-nav-btn"
      >
        <i className={`fa ${isPlaying ? "fa-pause" : "fa-play"}`} style={{ fontSize: "1.05rem" }} />
      </button>
    </div>
  );
};

export default FloatingNav;
