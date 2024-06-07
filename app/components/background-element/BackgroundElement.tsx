"use client";
import { useEffect, useState } from "react";
import styles from "./BackgroundElement.module.css";

interface Props {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  reverse?: boolean;
  width?: number;
}

const BackgroundElement = (props: Props) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const { top = 0, left = 0, right = 0, bottom = 0, reverse, width=50 } = props;

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX: mouseX, clientY: mouseY } = event;
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
      let offsetX;
      let offsetY;

      if (reverse) {
        offsetX = (0.5 - mouseX / windowWidth) * 60; // Reversed multiplier
        offsetY = (0.5 - mouseY / windowHeight) * 60; // Reversed multiplier
      } else {
        offsetX = (mouseX / windowWidth - 0.5) * 60; // Adjust the multiplier for desired effect
        offsetY = (mouseY / windowHeight - 0.5) * 60; // Adjust the multiplier for desired effect
      }

      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div
        className={styles.background_element}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          top: `${top}rem`,
          left: `${left}rem`,
          right: `${right}rem`,
          bottom: `${bottom}rem`,
          width: `${width}rem`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundElement;
