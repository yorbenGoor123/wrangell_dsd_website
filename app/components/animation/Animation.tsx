"use client";
import React from "react";
import Lottie from "react-lottie";
import styles from "./Animation.module.css";

interface AnimationProps {
  height?: number;
  width?: number;
  animationData: any;
  loop?: boolean;
  speed?: number;
}

const Animation = (props: AnimationProps) => {
  const { height = 600, width = 600, animationData, loop = false, speed = 1 } = props;

  const defaultOptions = {
    autoplay: true,
    loop,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.animation__container}>
      <Lottie speed={speed} options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default Animation;
