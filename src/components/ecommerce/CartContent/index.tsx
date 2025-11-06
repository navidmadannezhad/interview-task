"use client";

import { FC } from "react";
import styles from "./main.module.css";
import { MdRemove } from "react-icons/md";
import { Product } from "@/src/models";

interface CartContentProps{
    products: Product[];
};

const CartContent: FC<CartContentProps> = (props) => {
    const handleRemoveFromCart = () => {};
    const handleEndPurchase = () => {};

    return(
        <div
            className={styles.cartContent}
        >
            {props.products.map((product: Product) => (
                <div
                    className={styles.cartContentRow}
                    key={product.id}
                >
                    <p className={styles.cartContentRowTitle}>
                        {product.title}
                    </p>
                    <button className={styles.cartContentRowRemove} onClick={handleRemoveFromCart}>
                        <MdRemove
                            style={{
                                color: "var(--danger-contrast-text)"
                            }}
                        />
                    </button>
                </div>
            ))}

            <button
                className={styles.endPurchaseBtn}
                onClick={handleEndPurchase}
            >
                اتمام خرید
            </button>
        </div>
    )
}

export default CartContent;