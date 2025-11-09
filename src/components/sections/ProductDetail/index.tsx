"use client";

import { FC } from "react";
import styles from "./main.module.css";
import { CartItem, Product } from "@/src/models";
import { ImageWrapper } from "@/src/components/major";
import { enToFaNum, humanizePrice } from "@/src/utils/commonUtils";
import { AddToCartBtn } from "@/src/components/ecommerce";
import { useCart } from "@/src/services/store";

interface ProductDetailProps{
    product: Product;
};

const ProductDetail: FC<ProductDetailProps> = (props) => {
    const cartItems = useCart(state => state.cartItems);
    const productHasDiscount = !!props.product?.discount_price;
    const productAvailable = props.product?.available_count !== 0;

    const relatedCartItem = cartItems.find((item: CartItem) => item.product.id === props.product?.id);

    return(
       <div
            className={styles.productDetail}
        >

            <div
                className={styles.aspectRatioHolder}
            >
                <div
                    className={styles.productImgWrapper}
                >
                    <ImageWrapper
                        src={props.product?.thumbnail}
                        className={styles.productImg}
                        alt={props.product?.title ?? "تصویر محصول"}
                        fetchPriority="high"
                        loading="eager"
                        quality={75}
                        sizes="(min-width: 768px) 300px, 175px"
                    />
                </div>
            </div>

            <div
                className={styles.productContent}
            >
                <h1
                    className={styles.productTitle}
                >
                    {props.product?.title}
                </h1>
                <div
                    className={`
                        ${styles.productMainPrice}
                        ${productHasDiscount ? styles.discount_mainPrice : ""}
                        hiddenDownMD
                    `}
                >
                    {humanizePrice(props.product?.main_price)} <span className={styles.tomanHolder}>تومان</span>
                </div>
                {productHasDiscount ? (
                    <div
                        className={`
                            ${styles.productDiscountPrice}
                            hiddenDownMD  
                        `}
                    >
                        {humanizePrice(props.product?.discount_price)} <span className={styles.tomanHolder}>تومان</span>
                    </div>
                ) : null}
                <div
                    className={`
                        ${styles.addToCardBtn}
                        hiddenDownMD   
                    `}
                >
                    <AddToCartBtn product={props.product} />
                </div>
                {productAvailable ? (
                    <div
                        className={`
                            ${styles.productCountHolder}
                            hiddenDownMD  
                        `}
                    >
                        {
                            enToFaNum(relatedCartItem ? props.product?.available_count - relatedCartItem.count : props.product?.available_count )
                        } 
                        <p className={styles.tomanHolder}>عدد در انبار باقی مونده</p>
                    </div>
                ) : null}
                <p
                    className={styles.shortDescription}
                >
                    {props.product?.short_description}
                </p>
                <div
                    className={styles.longDescription}
                >
                    <p
                        className={styles.longDescriptionBody}
                    >
                        {props.product?.long_description}
                    </p>
                </div>
            </div>

            <div
                className={`
                    ${styles.mobileContentWrapper}
                    hiddenUpMD  
                `}
            >
                <div
                    className={styles.mobileContent}
                >
                    <div
                        className={styles.addToCardBtn}
                    >
                        <AddToCartBtn product={props.product} />
                    </div>
                    <div
                        className={styles.verticalHolder}
                    >
                        <div
                            className={`
                                ${styles.productMainPrice}
                                ${productHasDiscount ? styles.discount_mainPrice : ""}
                            `}
                        >
                            {humanizePrice(props.product?.main_price)} <span className={styles.tomanHolder}>تومان</span>
                        </div>
                        {productHasDiscount ? (
                            <div
                                className={styles.productDiscountPrice}
                            >
                                {humanizePrice(props.product?.discount_price)} <span className={styles.tomanHolder}>تومان</span>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;