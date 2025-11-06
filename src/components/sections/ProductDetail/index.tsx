import { FC } from "react";
import styles from "./main.module.css";
import { Product } from "@/src/models";
import { ImageWrapper } from "@/src/components/major";
import { humanizePrice } from "@/src/utils/commonUtils";

interface ProductDetailProps{
    product: Product;
};

const ProductDetail: FC<ProductDetailProps> = (props) => {
    const productHasDiscount = !!props.product.discount_price;
    // WIP -- TO BE DEBUGGED
    const isMdUp = false;

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
                        src={props.product.thumbnail}
                        className={styles.productImg}
                        alt={props.product.title ?? "تصویر محصول"}
                        // WIP -- give this a proper size
                        sizes="600px"
                    />
                </div>
            </div>

            <div
                className={styles.productContent}
            >
                <h1
                    className={styles.productTitle}
                >
                    {props.product.title}
                </h1>
                {isMdUp ? (
                    <>
                        <p
                            className={`
                                ${styles.productMainPrice}
                                ${productHasDiscount ? styles.discount_mainPrice : ""}
                            `}
                        >
                            {humanizePrice(props.product.main_price)} <span className={styles.tomanHolder}>تومان</span>
                        </p>
                        {productHasDiscount ? (
                            <p
                                className={styles.productDiscountPrice}
                            >
                                {humanizePrice(props.product?.discount_price)} <span className={styles.tomanHolder}>تومان</span>
                            </p>
                        ) : null}
                        <button
                            className={styles.addToCardBtn}
                        >
                            اضافه کردن به سبد خرید
                        </button>
                    </>
                ) : null}
                <p
                    className={styles.shortDescription}
                >
                    {props.product.short_description}
                </p>
                <div
                    className={styles.longDescription}
                >
                    <p
                        className={styles.longDescriptionBody}
                    >
                        {props.product.long_description}
                    </p>
                </div>
            </div>

            {!isMdUp ? (
                <div
                    className={styles.mobileContentWrapper}
                >
                    <div
                        className={styles.mobileContent}
                    >
                        <button
                            className={styles.addToCardBtn}
                        >
                            اضافه کردن به سبد خرید
                        </button>
                        <div
                            className={styles.verticalHolder}
                        >
                            <p
                                className={`
                                    ${styles.productMainPrice}
                                    ${productHasDiscount ? styles.discount_mainPrice : ""}
                                `}
                            >
                                {humanizePrice(props.product.main_price)} <span className={styles.tomanHolder}>تومان</span>
                            </p>
                            {productHasDiscount ? (
                                <p
                                    className={styles.productDiscountPrice}
                                >
                                    {humanizePrice(props.product?.discount_price)} <span className={styles.tomanHolder}>تومان</span>
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ProductDetail;