import { FC } from "react";
import styles from "./main.module.css";
import { CartBtn } from "@/src/components/ecommerce";
import Link from "next/link";
import { Dropdown } from "@/src/components/major";
import CartContent from "../../ecommerce/CartContent";
import { products } from "@/src/data/products";

interface HeaderProps{};

const Header: FC<HeaderProps> = (props) => {
    return(
        <header
            className={styles.header}
        >
            <Link
                className={styles.logo_text}
                href="/"
            >
                InterviewShop!
            </Link>

            <Dropdown
                content={<CartContent products={products.slice(0, 4)} />}
            >
                <CartBtn />
            </Dropdown>
        </header>
    )
}

export default Header;