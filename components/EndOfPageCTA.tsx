import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const EndOfPageCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const isDismissed = sessionStorage.getItem("cta_dismissed") === "true";
      if (isDismissed) return;

      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 250;

      if (isNearBottom) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial check in case page is already near bottom on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("cta_dismissed", "true");
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    setVisible(false);
    sessionStorage.setItem("cta_dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div
      className="position-fixed d-flex align-items-center justify-content-center px-3"
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: "rgba(8, 12, 20, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "fadeIn 0.3s ease-out",
      }}
      onClick={handleClose}
    >
      <div
        className="contact-dialog position-relative text-center p-4 p-sm-5"
        style={{
          maxWidth: "520px",
          width: "100%",
          background: "#111827",
          border: "1.5px solid rgba(0, 229, 255, 0.6)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 229, 255, 0.35)",
          borderRadius: "24px",
          transform: "translateY(-20px)",
          animation: "scaleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "16px",
            right: "18px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "1.2rem",
            cursor: "pointer",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          &times;
        </button>

        <div
          className="icon icon-shape bg-gradient-white shadow rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center"
          style={{
            width: "68px",
            height: "68px",
            background: "rgba(0, 229, 255, 0.12)",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            fontSize: "1.8rem",
          }}
        >
          👋
        </div>

        <h3
          className="text-info font-weight-bold mb-2"
          style={{ fontSize: "1.65rem", fontFamily: "monospace, sans-serif" }}
        >
          Let&apos;s Connect!
        </h3>
        <p className="text-white-50 mb-4 px-2" style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
          Interested in discussing a software engineering role, collaboration, or building a high-impact product
          together?
        </p>

        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
          <Button
            color="info"
            className="btn-icon text-white px-4 py-2.5 font-weight-bold w-100 w-sm-auto mb-2 mb-sm-0"
            href="mailto:sahalvishnuhari237@gmail.com?subject=Opportunity%20for%20Vishnu%20Hari%20Sahal"
            style={{
              borderRadius: "50rem",
              fontSize: "0.95rem",
              background: "linear-gradient(135deg, #11cdef 0%, #1171ef 100%)",
              border: "none",
              boxShadow: "0 0 16px rgba(17, 205, 239, 0.5)",
              letterSpacing: "0.5px",
            }}
          >
            <span className="btn-inner--icon mr-2">
              <i className="fa fa-envelope" />
            </span>
            <span>EMAIL ME</span>
          </Button>

          <Button
            color="secondary"
            className="btn-icon px-4 py-2.5 text-white font-weight-bold w-100 w-sm-auto ml-sm-2"
            onClick={handleBackToTop}
            style={{
              borderRadius: "50rem",
              fontSize: "0.95rem",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              letterSpacing: "0.5px",
            }}
          >
            <span className="btn-inner--icon mr-2">
              <i className="fa fa-arrow-up" />
            </span>
            <span>BACK TO TOP</span>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9) translateY(0);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(-20px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default EndOfPageCTA;
