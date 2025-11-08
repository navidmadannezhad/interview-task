import { GetProductsRequestSearchParamsDTO, QueryArgs } from "@/src/models";
import { getSearchParamsString, parseErrorResponse } from "@/src/utils/commonUtils";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const getTime = () => {
    const date = new Date();
    return `${date.getMinutes()} : ${date.getSeconds()}`
}

export const getProducts = async (queryArgs: QueryArgs<GetProductsRequestSearchParamsDTO>) => {
    console.log(getTime(), "-- GET PRODUCTS BEING RUN --")
    const searchString = getSearchParamsString<GetProductsRequestSearchParamsDTO>(queryArgs.searchParams);
    const res = await fetch(`${SERVER_URL}/api/ecommerce/products?${searchString}`);

    if(res.status !== 200){
        const errorBody = await parseErrorResponse(res);
        throw errorBody;
    }

    const data = await res.json();
    return data.body;
}

export const getProductByID = async (queryArgs: { id: number }) => {
    const res = await fetch(`${SERVER_URL}/api/ecommerce/products/${queryArgs.id}`);

    if(res.status !== 200){
        const errorBody = await parseErrorResponse(res);
        throw errorBody;
    }

    const data = await res.json();
    return data.body;
}