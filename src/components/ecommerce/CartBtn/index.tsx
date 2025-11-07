"use client";

import { FC } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./main.module.css";
import { enToFaNum } from "@/src/utils/commonUtils";
import { Drawer, Dropdown } from "@/src/components/major";
import { CartContent } from "@/src/components/ecommerce";
import { useCart } from "@/src/services/store";

interface CartBtnProps{};

const CartBtn: FC<CartBtnProps> = (props) => {
    const cartItems = useCart(state => state.cartItems);
    const count = cartItems.length;

    return(
        <>
            <Dropdown
                content={<CartContent items={cartItems} />}
                className="hiddenDownMD"
            >
                <div className={styles.cartBtnDesktopWrapper}>
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
            </Dropdown>
            <Drawer
                content={<CartContent items={cartItems} />}
                className="hiddenUpMD"
            >
                <div className={styles.cartBtnMobileWrapper}>
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
            </Drawer>
        </>
        
    )
}

export default CartBtn;