import React from "react";
import { useAutoScroll } from "../hooks/useAutoScroll";

const FloatingNav = () => {
  const { isPlaying, toggleAutoScroll } = useAutoScroll(22);

  const scrollToSection = (id: string) => {
    if (id === "greetings") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
    <div
      className="floating-nav-bar"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1.5px solid rgba(17, 205, 239, 0.7)",
        boxShadow: "0 0 20px rgba(17, 205, 239, 0.35)",
        borderRadius: "50rem",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "14px",
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          aria-label={item.label}
          title={item.label}
          className="floating-nav-btn"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(17, 205, 239, 0.5)",
            boxShadow: "0 0 8px rgba(17, 205, 239, 0.25)",
            color: "#11cdef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            outline: "none",
            transition: "all 0.3s ease",
            padding: 0,
          }}
        >
          <i className={`${item.icon}`} style={{ fontSize: "1.1rem" }} />
        </button>
      ))}

      {/* Auto-Scroll Toggle Button */}
      <button
        onClick={toggleAutoScroll}
        aria-label={isPlaying ? "Pause Auto-Scroll" : "Play Auto-Scroll"}
        title={isPlaying ? "Pause Auto-Scroll" : "Play Auto-Scroll"}
        className="floating-nav-btn"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: isPlaying ? "rgba(17, 205, 239, 0.3)" : "rgba(255, 255, 255, 0.08)",
          border: isPlaying ? "1px solid rgba(17, 205, 239, 0.9)" : "1px solid rgba(17, 205, 239, 0.5)",
          boxShadow: isPlaying ? "0 0 14px rgba(17, 205, 239, 0.6)" : "0 0 8px rgba(17, 205, 239, 0.25)",
          color: isPlaying ? "#ffffff" : "#11cdef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          outline: "none",
          transition: "all 0.3s ease",
          padding: 0,
        }}
      >
        <i className={`fa ${isPlaying ? "fa-pause" : "fa-play"}`} style={{ fontSize: "1.05rem" }} />
      </button>

      <style jsx>{`
        .floating-nav-btn:hover {
          transform: scale(1.15);
          background: rgba(17, 205, 239, 0.2) !important;
          border-color: rgba(17, 205, 239, 0.9) !important;
          box-shadow: 0 0 14px rgba(17, 205, 239, 0.6) !important;
          color: #ffffff !important;
        }
        @media (max-width: 576px) {
          .floating-nav-bar {
            bottom: 16px !important;
            padding: 6px 12px !important;
            gap: 10px !important;
          }
          .floating-nav-btn {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingNav;
