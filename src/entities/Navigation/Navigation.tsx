"use client"

import styles from "./Navigation.module.scss";
import Link from "next/link";
import Image from "next/image"
import {useState} from "react";

export default function Navigation() {
    const [isActive, setActive] = useState(true)


    return (
        <nav className={styles.nav}>
            <div className={`${styles["nav__logo"]} ${styles.logo} container`}><Image className={styles["logo__img"]} />
            </div>
            <div className={styles.burger}>
                <div>
                    Burger
                </div>
            </div>
            <ul className={styles.menu}>
                <li className={styles["menu__item"]}>
                    <Link href="/" className={isActive ? `${styles["menu__link"]} ${styles["menu__link--active"]} ` : `${styles["menu__link"]}`}> Home </Link>
                </li>
                <li><Link className={styles["menu__link"]} href="/about">About</Link></li>
                <li><Link href="/contacts" className={styles["menu__link"]}>Contacts</Link></li>
            </ul>
        </nav>
    )
}



