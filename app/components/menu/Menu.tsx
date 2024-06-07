"use client";
import classNames from "classnames";
import styles from "./Menu.module.css";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
                <Link href="/about">About</Link>
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
                <Link href="/work">Work</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer}>
            <a href="#" className={styles.footer_item}>
              yorben.goor@wrangell-dsd.com
            </a>
            <p className={styles.footer_item}>COPYRIGHT © WRANGELL-DSD</p>
            <p className={styles.footer_item}>VAT BE0794673983</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
