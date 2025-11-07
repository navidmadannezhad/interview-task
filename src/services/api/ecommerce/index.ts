import { GetProductsRequestSearchParamsDTO, QueryArgs } from "@/src/models";
import { getSearchParamsString } from "@/src/utils/commonUtils";

const SERVER_URL = process.env.SERVER_URL;

export const getProducts = async (queryArgs: QueryArgs<GetProductsRequestSearchParamsDTO>) => {
    const searchString = getSearchParamsString<GetProductsRequestSearchParamsDTO>(queryArgs.searchParams);
    const res = await fetch(`${SERVER_URL}/api/ecommerce/products?${searchString}`);
    const data = await res.json();

    return data;
}

export const getProductByID = async (queryArgs: { id: number }) => {
    console.log(queryArgs.id)
    const res = await fetch(`${SERVER_URL}/api/ecommerce/products/${queryArgs.id}`);
    const data = await res.json();
    console.log(data)

    return data;
}