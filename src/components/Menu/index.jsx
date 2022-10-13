import styles from '../Menu/Menu.module.scss';

export default function Menu() {
    return (
       <nav className={styles.menu}>
        <url className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src="" alt="" />
                <a href="/">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src="" alt="" />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src="" alt="" />
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src="" alt="" />
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src="" alt="" />
                <a href="/">Supreenda-me</a>
            </li>
        </url>
       </nav>
    );
}