"use client";
import classNames from "classnames";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Effect to handle adding/removing the no-scroll class on the body
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up by removing the class when the component unmounts or menuOpen changes
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <>
      <div onClick={() => setMenuOpen(true)} className={styles.menu}>
        <div className={classNames(styles.top_part, styles.menu_item)}>
          <div className={styles.top_part_wrapper}></div>
        </div>
        <div className={classNames(styles.middle_part, styles.menu_item)}>
          <div className={styles.middle_part_start}></div>
          <div className={styles.middle_part_center}></div>
          <div className={styles.middle_part_end}></div>
        </div>
        <div className={classNames(styles.bottom_part, styles.menu_item)}></div>
      </div>

      {menuOpen && (
        <div className={styles.menu_container}>
          <div
            className={styles.menu_cross}
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className={styles.menu_collapsed_container}>
            <ul
              onClick={() => setMenuOpen(false)}
              className={styles.menu_collapsed_items}
            >
              <li
                className={classNames(
                  styles.menu_collapsed_item,
                  styles.menu_collapsed_item_top
                )}
              >
                <div
                  className={classNames(
                    styles.hoverElement,
                    styles.hoverElement_top
                  )}
                ></div>
                <Link href="mailto:yorben.goor@wrangell-dsd.com">Contact</Link>
              </li>
              <li
                className={classNames(
                  styles.menu_collapsed_item,
                  styles.menu_collapsed_item_center
                )}
              >
                <div
                  className={classNames(
                    styles.hoverElement,
                    styles.hoverElement_center
                  )}
                ></div>
                <Link href="/experience">Experience</Link>
              </li>
              <li
                className={classNames(
                  styles.menu_collapsed_item,
                  styles.menu_collapsed_item_bottom
                )}
              >
                <div
                  className={classNames(
                    styles.hoverElement,
                    styles.hoverElement_bottom
                  )}
                ></div>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer}>
            <Link
              href="mailto:yorben.goor@wrangell-dsd.com"
              className={styles.footer_item}
            >
              yorben.goor@wrangell-dsd.com
            </Link>
            <p className={styles.footer_item}>COPYRIGHT © WRANGELL-DSD</p>
            <p className={styles.footer_item}>VAT BE0794673983</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
