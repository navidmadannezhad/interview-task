"use client";

import { FC } from "react";
import styles from "./main.module.css";
import { CartItem, Product } from "@/src/models";
import useCart from "@/src/services/store/ecommerce/useCart";
import useProductIsInCart from "@/src/hooks/useProductIsInCart";
import { MdAdd, MdRemove } from "react-icons/md";
import { enToFaNum } from "@/src/utils/commonUtils";
import toast from "react-hot-toast";

interface AddToCartBtnProps{
    product: Product;
};

const AddToCartBtn: FC<AddToCartBtnProps> = (props) => {
    const addToCart = useCart((state) => state.addToCart)
    const increaseItemCount = useCart((state) => state.increaseItemCount)
    const decreaseItemCount = useCart((state) => state.decreaseItemCount)
    const cartItems = useCart((state) => state.cartItems)
    const removeFromCart = useCart((state) => state.removeFromCart)
    const existsInCart = useProductIsInCart(props.product);

    const itemCount = cartItems.find((item: CartItem) => item.product.id === props.product.id)?.count;

    const handleAddToCart = () => {
        addToCart(props.product)
        toast.success("محصول به سبد خرید اضافه شد")
    }

    const handleIncreaseCount = () => {
        if(itemCount === props.product.available_count){
            toast.error("محصول از این بیشتر تو انبار نیست!")
            return;
        }
        increaseItemCount(props.product)
    }

    const handleDecreaseCount = () => {
        if(itemCount === 1){
            handleRemoveFromCart()
            return;
        }
        decreaseItemCount(props.product)
    }

    const handleRemoveFromCart = () => {
        removeFromCart(props.product);
    }

    return(
        <div
            className={`
                ${styles.addToCartBtnWrapper}
                ${existsInCart ? styles.countMode : ""}    
            `}
        >
            {existsInCart ? (
                <>
                    <button 
                        className={`
                            ${styles.countControlBtn}
                            ${styles.countIncreaseBtn}
                        `}
                        onClick={handleIncreaseCount}
                    >
                        <MdAdd />
                    </button>
                    <p className={styles.countHolder}>
                        {enToFaNum(itemCount ?? 0)}
                    </p>
                    <button 
                        className={`
                            ${styles.countControlBtn}
                            ${styles.countDecreaseBtn}
                        `}
                        onClick={handleDecreaseCount}
                    >
                        <MdRemove />
                    </button>
                </>
            ) : (
                <button 
                    className={styles.addToCardBtn}
                    onClick={handleAddToCart}
                >
                    اضافه کردن به سبد خرید
                </button>
            )}
        </div>
    )
}

export default AddToCartBtn;