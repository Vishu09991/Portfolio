import React from "react";

/** An abstract circuit diagram, not a screenshot or claim about the project. */
export default function ProjectArtwork({ icon }: { icon: string }) {
  return (
    <div className="project-artwork" aria-hidden="true">
      <svg viewBox="0 0 360 150" fill="none" focusable="false">
        <path d="M0 76h86l30-30h43M360 76h-86l-30 30h-43M44 150v-34l38-38M316 0v34l-38 38" />
        <path
          className="circuit-secondary"
          d="M0 94h94l29-29h35M360 58h-94l-29 29h-35M92 0v24l32 32M268 150v-24l-32-32"
        />
        <circle cx="86" cy="76" r="4" />
        <circle cx="274" cy="76" r="4" />
        <circle cx="44" cy="130" r="3" />
        <circle cx="316" cy="20" r="3" />
      </svg>
      <span className="project-artwork-base" />
      <span className="project-artwork-chip">
        <i className={icon} />
      </span>
    </div>
  );
}
