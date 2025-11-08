"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./main.module.css";
// import { ProductCard } from "@/src/components/ecommerce";
import { PaginationSearhParams, Product } from "@/src/models";
import { MANUAL_PAGINATION_START_COUNT, paginationInitialState } from "@/src/configs/major";
import { getProducts } from "@/src/services/api/ecommerce";
import { useReachedBottom } from "@/src/hooks";
import { EmptyWrapper } from "@/src/components/major";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

interface ProductsListProps{
    products: Product[];
};

const ProductCard = dynamic(() => import('../../ecommerce/ProductCard'))

const ProductsList: FC<ProductsListProps> = (props) => {
    const productsContainerRef = useRef<HTMLDivElement>(null);
    const [products, setProducts] = useState<Product[]>(props.products);
    const [paginationModel, setPaginationModel] = useState<PaginationSearhParams>(paginationInitialState)
    const [productsEnded, setProductsEnded] = useState<boolean>(false);
    const [manualPaginationActive, setManualPaginationActive] = useState<boolean>(false);
    const [paginatedCount, setPaginatedCount] = useState<number>(0);
    const [isFetching, setIsFetching] = useState(false);

    const reachedBottom = useReachedBottom(productsContainerRef);

    const fetchProducts = async (paginationState: PaginationSearhParams) => {
        setIsFetching(true);

        try{
            const { results } = await getProducts({
                searchParams: paginationState
            })

            if(results.length === 0) {
                setProductsEnded(true);
                return;
            }

            setProducts(prev => ([
                ...prev,
                ...results
            ]))
        }catch{
            toast.error("مشکل در دریافت اطلاعات!")
        }finally{
            setIsFetching(false)
        }
    }

    const handleFetchMoreProducts = () => {
        setPaginationModel(prev => ({
            ...prev,
            offset: prev.offset + prev.limit
        }))
    }

    useEffect(() => {
        if(paginatedCount === MANUAL_PAGINATION_START_COUNT){
            setManualPaginationActive(true)
        }
    }, [paginatedCount])

    useEffect(() => {
        if(reachedBottom && paginatedCount < MANUAL_PAGINATION_START_COUNT){
            setPaginatedCount(prev => prev + 1)
            setPaginationModel(prev => ({
                ...prev,
                offset: prev.offset + prev.limit
            }))
        }
    }, [reachedBottom]);

    useEffect(() => {
        if(paginationModel.offset !== paginationInitialState.offset && !productsEnded){
            (async () => {
                await fetchProducts(paginationModel)
            })()
        }
    }, [paginationModel.offset, paginationModel.limit])

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
                <EmptyWrapper items={products}>
                    {products.map((product: Product) => (
                        <ProductCard
                            product={product}
                            key={product.id}
                        />
                    ))}
                </EmptyWrapper>
            </div>
            <div ref={productsContainerRef} />

            {isFetching ? (
                <div
                    className={styles.loadingBallsWrapper}
                >
                    <div className={styles.loadingBall} />
                    <div className={styles.loadingBall} />
                    <div className={styles.loadingBall} />
                </div>
            ) : null}

            {manualPaginationActive && !isFetching && !productsEnded ? (
                <button
                    className={styles.manualPaginationActive}
                    onClick={handleFetchMoreProducts}
                >
                    دریافت محصولات بیشتر
                </button>
            ) : null}
        </div>
    )
}

export default ProductsList;