"use client";
import styles from "./Landing.module.css";
import BackgroundElement from "@/app/components/background-element/BackgroundElement";
import NavLink from "@/app/components//nav-link/NavLink";
import BackgroundIllustration from "@/app/components/background-illustration/BackgroundIllustration";
import IllustrationFadeIn from "./illustration_fade_in.json";
import Animation from "@/app/components/animation/Animation";
import { useState } from "react";
import classNames from "classnames";
import AnimatedIllustration from "@/app/components/logo-animation/IllustrationAnimation";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [speed, setSpeed] = useState(1);

  return (
    <div className={styles.landing_wrapper}>
      <BackgroundElement top={8} left={-20} />
      <BackgroundElement reverse top={20} left={60} />
      <BackgroundElement top={2} left={50} width={20} />
      <div className={styles.landing_text}>
        <h1 className={styles.landing_heading}>
          UI/UX <span className={styles.landing_design}>DESIGN</span>, <br />{" "}
          <span className={styles.landing_development}>DEVELOPMENT</span>,{" "}
          <br />
          <span className={styles.rubber_duck}>RUBBER DUCK</span>ING
        </h1>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={styles.landing_button_container}
        >
          <NavLink href="test">
            <p>Have a talk!</p>
          </NavLink>
        </div>
      </div>
      <div>
        <div className={styles.illustrations}>
          <div
            className={classNames(
              styles.illustration_mouse_in,
              isHovered ? styles.fade_in : styles.fade_out
            )}
          >
            <Animation
              speed={speed}
              loop={true}
              width={800}
              height={800}
              animationData={IllustrationFadeIn}
            />
          </div>
          <div
            className={classNames(
              styles.illustration_mouse_out,
              isHovered ? styles.fade_out : styles.fade_in
            )}
          >
            <AnimatedIllustration speed={speed} setSpeed={setSpeed} />
          </div>
        </div>

        <BackgroundIllustration speed={speed} />
      </div>
    </div>
  );
};

export default Landing;
