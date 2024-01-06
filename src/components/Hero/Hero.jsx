import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aarifa</h1>
        <p className={styles.description}>
          Passionate Web Code Enthusiast and Java Developer with expertise in
          React and NodeJS, eager to collaborate and create impactful digital
          experiences
        </p>
        <a
          href="mailto:aarifasiddiqui282@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("about/aarifa.jpeg")}
        alt="Aarifa img"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
