import { FC } from "react";
import styles from "./main.module.css";

interface FooterProps{};

const Footer: FC<FooterProps> = (props) => {
    return(
        <footer
            // className={styles.header}
        >
            Footer
        </footer>
    )
}

export default Footer;