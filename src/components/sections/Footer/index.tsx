import { FC } from "react";
import styles from "./main.module.css";
import Link from "next/link";

interface FooterProps{};

const Footer: FC<FooterProps> = (props) => {
    return(
        <footer
            className={styles.footer}
        >
            <div
                className={styles.footerMainContent}
            >
                <div
                    className={styles.footerMinorContent}
                >
                    <p
                        className={styles.footerMinorContentTitle}
                    >
                        تیتر تست
                    </p>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                </div>

                <div
                    className={styles.footerMinorContent}
                >
                    <p
                        className={styles.footerMinorContentTitle}
                    >
                        تیتر تست
                    </p>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                </div>

                <div
                    className={styles.footerMinorContent}
                >
                    <p
                        className={styles.footerMinorContentTitle}
                    >
                        تیتر تست
                    </p>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                    >
                        تست
                    </Link>
                </div>
            </div>
            <div
                className={styles.copyRight}
            >
                فروشگاه اینترویو شاپ | تمامی حقوق محفوظ است
            </div>
        </footer>
    )
}

export default Footer;