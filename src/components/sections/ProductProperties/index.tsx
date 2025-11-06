import { FC } from "react";
import styles from "./main.module.css";
import { Product } from "@/src/models";

interface ProductPropertiesProps{
    product: Product;
};

const ProductProperties: FC<ProductPropertiesProps> = (props) => {
    const properties = props.product.properties ?? {};

    return(
        <div
            className={styles.productProperties}
        >
            <h2
                className={styles.sectionTitle}
            >
                ویژگی های محصول
            </h2>
            <div
                className={styles.propertiesTable}
            >
                {Object.keys(properties ?? {}).map((key: string) => (
                    <div 
                        className={styles.propertyRow}
                        key={key}
                    >
                        <div className={styles.propertyRow_key}>
                            {key}
                        </div>
                        <div className={styles.propertyRow_value}>
                            {properties[key]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductProperties;