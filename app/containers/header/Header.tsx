import styles from "./Header.module.css";

import Image from "next/image"; // Import the Image component from next/image
import Menu from "@/app/components/menu/Menu";
import NavLink from "@/app/components/nav-link/NavLink";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Link href="/">
        <Image
          src="/assets/branding/logo_wrangell-without-text.svg"
          width={80}
          height={80}
          alt="logo"
        />
      </Link>
      <ul className={styles.social_media_items}>
        <li>
          <NavLink icon href="test">
            <Image
              src="/assets/social_media/instagram.svg"
              width={20}
              height={20}
              alt="logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink icon href="test">
            <Image
              src="/assets/social_media/linkedin.svg"
              width={20}
              height={20}
              alt="logo"
            />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
