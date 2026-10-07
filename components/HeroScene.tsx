import React from "react";
import GreetingLottie from "./DisplayLottie";
import styles from "../styles/HeroScene.module.css";

/** Decorative depth around the original illustration; no additional portfolio copy. */
export default function HeroScene() {
  return (
    <div className={styles.scene}>
      <div className={styles.halo} aria-hidden="true" />
      <div className={styles.backplate} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={styles.platform} aria-hidden="true" />
      <div className={styles.illustration}>
        <GreetingLottie animationPath="/lottie/coding.json" />
      </div>
      <div className={`${styles.chip} ${styles.code}`} aria-hidden="true">
        <i className="fa fa-code" />
      </div>
      <div className={`${styles.chip} ${styles.database}`} aria-hidden="true">
        <i className="fa fa-database" />
      </div>
      <div className={styles.connector} aria-hidden="true" />
    </div>
  );
}
