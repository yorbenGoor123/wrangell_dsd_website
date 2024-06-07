import Link from "next/link";
import styles from "./NavLink.module.css";
import classNames from "classnames";

interface Props {
  href: string;
  children: React.ReactElement;
  icon?: boolean;
}

const NavLink = (props: Props) => {
  const { href, children, icon = false } = props;

  return (
    <div className={styles.link_container}>
    <Link href={href}>
      <div className={styles.nav_link_wrapper}>
        <div className={styles.nav_link_background}></div>
        <div
          className={styles.nav_link}
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
