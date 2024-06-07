import styles from './NavItem.module.css'

interface NavItemProps {
    title: string;
    href: string;
}

const NavItem = (props: NavItemProps) => {
    const { title, href } = props;

    return (
        <li className={styles.nav__item}>
            <a href="#">{title}</a>
        </li>
    )
}

export default NavItem;