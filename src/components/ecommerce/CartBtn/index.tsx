"use client";

import { FC } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./main.module.css";
import { enToFaNum } from "@/src/utils/commonUtils";

interface CartBtnProps{};

const CartBtn: FC<CartBtnProps> = (props) => {
    const count = 3;

    return(
        <div className={styles.cartBtnWrapper}>
            <MdOutlineShoppingCart
                size={32}
            />

            {count ? (
                <div
                    className={styles.cartProductCount}
                >
                    {enToFaNum(count)}
                </div>
            ) : null}
        </div>
    )
}

export default CartBtn;