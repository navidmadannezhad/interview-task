"use client"

import { FC } from "react";
import styles from "./main.module.css";
import { CartBtn } from "@/src/components/ecommerce";
import Link from "next/link";

interface HeaderProps{};

const Header: FC<HeaderProps> = (props) => {
    return(
        <header
            className={styles.header}
        >
            <Link
                className={styles.logo_text}
                href="/"
                prefetch={false}
            >
                InterviewShop!
            </Link>

            <CartBtn />
        </header>
    )
}

export default Header;