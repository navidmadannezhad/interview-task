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
                        با اینترویوشاپ
                    </p>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        در اینترویوشاپ فروشنده شوید
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        تماس با اینترویوشاپ
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        فرصت های شغلی
                    </Link>
                </div>

                <div
                    className={styles.footerMinorContent}
                >
                    <p
                        className={styles.footerMinorContentTitle}
                    >
                        خدمات مشتری
                    </p>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        پرسش های متداول
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        روش های مرجوعی کالا
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        قوانین و شرایط استفاده
                    </Link>
                </div>

                <div
                    className={styles.footerMinorContent}
                >
                    <p
                        className={styles.footerMinorContentTitle}
                    >
                        راهنمای خرید
                    </p>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        ثبت سفارش
                    </Link>
                    <Link
                        className={styles.footerMinorContentLink}
                        href="#"
                        prefetch={false}
                    >
                        رویه های ارسال سفارش
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