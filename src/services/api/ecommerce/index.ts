import { GetProductsRequestSearchParamsDTO, QueryArgs } from "@/src/models";
import { getSearchParamsString } from "@/src/utils/commonUtils";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const getTime = () => {
    const date = new Date();
    return `${date.getMinutes()} : ${date.getSeconds()}`
}

export const getProducts = async (queryArgs: QueryArgs<GetProductsRequestSearchParamsDTO>) => {
    console.log(getTime(), "-- GET PRODUCTS BEING RUN --")
    const searchString = getSearchParamsString<GetProductsRequestSearchParamsDTO>(queryArgs.searchParams);
    const res = await fetch(`${SERVER_URL}/api/ecommerce/products?${searchString}`);
    const data = await res.json();

    return data;
}

export const getProductByID = async (queryArgs: { id: number }) => {
    console.log(getTime(), "-- GET PRODUCTSBYID BEING RUN --")
    const res = await fetch(`${SERVER_URL}/api/ecommerce/products/${queryArgs.id}`);
    const data = await res.json();

    return data;
}