import { FC } from "react";
import styles from "./main.module.css";
import { CartBtn } from "@/src/components/ecommerce";

interface HeaderProps{};

const Header: FC<HeaderProps> = (props) => {
    return(
        <header
            className={styles.header}
        >
            <p
                className={styles.logo_text}
            >
                InterviewShop!
            </p>

            <CartBtn />
        </header>
    )
}

export default Header;