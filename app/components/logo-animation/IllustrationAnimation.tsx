"use client";
import React, { useEffect, useState } from "react";
import Animation from "../animation/Animation";
import animationData from "./main_illustration_3.json";
import styles from "./IllustrationAnimation.module.css";

interface Props {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
}

const AnimatedIllustration = (props: Props) => {
  const { speed, setSpeed } = props;

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const width = window.innerWidth;
      const mouseX = e.clientX;
      const newSpeed = (mouseX / width) * 3; // Adjust the multiplier to control max speed
      setSpeed(newSpeed);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setSpeed(speed);
  }, [speed]);

  return (
    <>
      <div className={styles.phone}>
        <Animation
          speed={speed}
          loop={true}
          width={300}
          height={300}
          animationData={animationData}
        />
      </div>
      <div className={styles.tablet}>
        <Animation
          speed={speed}
          loop={true}
          width={500}
          height={500}
          animationData={animationData}
        />
      </div>
      <div className={styles.desktop}>
        <Animation
          speed={speed}
          loop={true}
          width={650}
          height={650}
          animationData={animationData}
        />
      </div>
    </>
  );
};

export default AnimatedIllustration;
