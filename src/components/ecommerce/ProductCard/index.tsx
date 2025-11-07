"use client";

import { FC } from "react";
import styles from "./main.module.css";
import ImageWrapper from "../../major/ImageWrapper";
import { Product } from "@/src/models";
import { humanizePrice } from "@/src/utils/commonUtils";
import Link from "next/link";
import AddToCartBtn from "../AddToCartBtn";

interface ProductCardProps{
    product: Product;
};

const ProductCard: FC<ProductCardProps> = (props) => {
    const productHasDiscount = props.product.discount_price;

    return(
        <div
            className={styles.product_card_wrapper}
        >
            <Link
                className={styles.product_card_img_container}
                href={`/products/${props.product.id}`}
            >
                <ImageWrapper
                    src={props.product.thumbnail}
                    alt={props.product.title}
                    className={styles.product_card_img}
                    fetchPriority="high"
                    // WIP -- define something that is compatible with image dimensions
                    sizes="600px"
                />
            </Link>
            <div className={styles.product_card_content_wrapper}>
                <div 
                    className={styles.product_card_title}
                >
                    {props.product.title}
                </div>
                <div 
                    className={`
                        ${styles.product_card_mainPrice}
                        ${productHasDiscount ? styles.mainPrice_discountActive  : ""}    
                    `}
                >
                    {humanizePrice(props.product.main_price)} <span className={styles.tomanHolder}>تومان</span>
                </div>
                {productHasDiscount ? (
                    <div 
                        className={styles.product_card_discountPrice}
                    >
                        {humanizePrice(props.product.discount_price)} <span className={styles.tomanHolder}>تومان</span>
                    </div>
                ) : null}

                <div 
                    className={styles.cartBtnHolder}
                >
                    <AddToCartBtn product={props.product} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;