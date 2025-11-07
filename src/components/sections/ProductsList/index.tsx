import { FC } from "react";
import styles from "./main.module.css";
import { ProductCard } from "@/src/components/ecommerce";
import { Product } from "@/src/models";

interface ProductsListProps{
    products: Product[];
};

const ProductsList: FC<ProductsListProps> = (props) => {
    return(
        <div
            className={styles.products_list_wrapper}
        >
           <p>
                لیست محصولات
            </p> 

            <div
                className={styles.products_list}
            >
                {props.products.map((product: Product) => (
                    <ProductCard
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;