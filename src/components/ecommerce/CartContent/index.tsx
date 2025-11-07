"use client";

import { FC } from "react";
import styles from "./main.module.css";
import { MdRemove } from "react-icons/md";
import { CartItem, Product } from "@/src/models";
import { useCart } from "@/src/services/store";
import { EmptyWrapper } from "@/src/components/major";

interface CartContentProps{
    items: CartItem[];
};

const CartContent: FC<CartContentProps> = (props) => {
    const removeFromCart = useCart(state => state.removeFromCart);

    const handleRemoveFromCart = (product: Product) => {
        removeFromCart(product)
    };
    const handleEndPurchase = () => {};

    return(
        <div
            className={styles.cartContent}
        >
            <EmptyWrapper items={props.items}>
                {props.items.map((cartItem: CartItem) => (
                    <div
                        className={styles.cartContentRow}
                        key={cartItem.product.id}
                    >
                        <p className={styles.cartContentRowTitle}>
                            {cartItem.product.title}
                        </p>
                        <button className={styles.cartContentRowRemove} onClick={() => handleRemoveFromCart(cartItem.product)}>
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
            </EmptyWrapper>
        </div>
    )
}

export default CartContent;