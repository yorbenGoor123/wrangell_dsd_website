"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { useState } from "react";

interface Props {
  href: string;
  children: React.ReactElement;
  icon?: boolean;
}

const NavLink = (props: Props) => {
  const { href, children, icon = false } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.link_container}>
      <Link href={href} target="_blank">
        <div className={styles.nav_link_wrapper}>
          <div
            className={styles.nav_link_background}
            style={isHover ? { top: "-0.4rem", left: "-0.4rem" } : {}}
          ></div>
          <div
            className={styles.nav_link}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{ padding: icon ? ".5rem" : "0rem 1.5rem 0rem 1.5rem" }}
          >
            {children}
          </div>
          <div className={styles.hover_navigation_line}></div>
        </div>
      </Link>
    </div>
  );
};

export default NavLink;
