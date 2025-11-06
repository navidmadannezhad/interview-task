"use client";

import { FC } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./main.module.css";
import Image from "next/image";
import ImageWrapper from "../../major/Image";
import { Product } from "@/src/models";

interface ProductCardProps{
    product: Product;
};

const ProductCard: FC<ProductCardProps> = (props) => {
    return(
        <div
            className={styles.product_card_wrapper}
        >
            <div
                className={styles.product_card_img_container}
            >
                <ImageWrapper
                    src={props.product.thumbnail}
                    alt={props.product.title}
                    className={styles.product_card_img}
                    // WIP -- define something that is compatible with image dimensions
                    sizes="600px"
                />
            </div>
            <div 
                className={styles.product_card_title}
            >
                {props.product.title}
            </div>
            <div 
                className={styles.product_card_mainPrice}
            >
                {props.product.main_price}
            </div>
            <div 
                className={styles.product_card_discountPrice}
            >
                {props.product.discount_price}
            </div>
        </div>
    )
}

export default ProductCard;