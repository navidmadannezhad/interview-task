"use client";

import { FC, useCallback, useEffect, useMemo } from "react";
import styles from "./main.module.css";
import { MdRemove } from "react-icons/md";
import { CartItem, Product } from "@/src/models";
import { useCart } from "@/src/services/store";
import { EmptyWrapper, ImageWrapper } from "@/src/components/major";
import { enToFaNum, humanizePrice } from "@/src/utils/commonUtils";
import toast from "react-hot-toast";

interface CartContentProps{
    items: CartItem[];
};

const CartContent: FC<CartContentProps> = (props) => {
    const removeFromCart = useCart(state => state.removeFromCart);

    const handleRemoveFromCart = (product: Product) => {
        removeFromCart(product)
    }

    const handleEndPurchase = () => {
        const toastId = toast.loading("درحال انتقال به درگاه پرداخت...")
        setTimeout(() => {
            toast.success("اگه قسمت بود قبول شدم در آینده این فیچر هم میزنیم کنار هم :)", { id: toastId, duration: 5000 })
        }, 1000)
    };

    const priceSum = useMemo(() => {
        return props.items.reduce((current, next) => (current + (next.product.discount_price ?? next.product.main_price) * next.count), 0)
    }, [props.items])

    return(
        <div
            className={styles.cartContent}
        >
            <EmptyWrapper items={props.items}>
                <div
                    className={styles.cartContentRowsWrapper}
                >
                        {props.items.map((cartItem: CartItem) => (
                            <div
                                className={styles.cartContentRow}
                                key={cartItem.product.id}
                            >
                                <ImageWrapper
                                    src={cartItem.product.thumbnail}
                                    className={styles.itemThumbnail}
                                    sizes="80px"
                                    alt={cartItem.product?.title ?? "تصویر محصول"}
                                />
                                <div className={styles.cartContentWrapper}>
                                    <p 
                                        className={styles.cartContentRowTitle}
                                    >
                                        {cartItem.product.title}
                                    </p>
                                    <div className={styles.cartDetailsWrapper}>
                                        <p className={styles.itemDetail}>
                                            تعداد: {enToFaNum(cartItem.count)}
                                        </p>
                                        <p className={styles.itemDetail}>
                                            قیمت: {
                                                humanizePrice(
                                                    (cartItem.product.discount_price ?? cartItem.product.main_price) * cartItem.count
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.cartContentOperationsWrapper}>
                                    <button 
                                        className={styles.cartContentRowRemove} 
                                        onClick={() => handleRemoveFromCart(cartItem.product)}
                                        aria-label={`حذف ${cartItem.product.title} از سبد خرید`}
                                    >
                                        <MdRemove
                                            color="var(--danger-contrast-text)"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>

                <div className={styles.priceSum}>
                    <span className={styles.priceSumLabel}>مجموع خرید شما:</span> {humanizePrice(priceSum)}
                </div>

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