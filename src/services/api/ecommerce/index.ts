import { GetProductsRequestSearchParamsDTO, QueryArgs } from "@/src/models";
import { getSearchParamsString, parseErrorResponse } from "@/src/utils/commonUtils";
import httpClient from "@/src/services/api/httpClient";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const getTime = () => {
    const date = new Date();
    return `${date.getMinutes()} : ${date.getSeconds()}`
}

export const getProducts = async (queryArgs: QueryArgs<GetProductsRequestSearchParamsDTO>) => {
    const searchString = getSearchParamsString<GetProductsRequestSearchParamsDTO>(queryArgs.searchParams);
    const res = await httpClient(`${SERVER_URL}/api/ecommerce/products?${searchString}`);

    if(res.status !== 200){
        const errorBody = await parseErrorResponse(res);
        throw errorBody;
    }

    const data = await res.json();
    return data.body;
}

export const getProductByID = async (queryArgs: { id: number }) => {
    const res = await httpClient(`${SERVER_URL}/api/ecommerce/products/${queryArgs.id}`);

    if(res.status !== 200){
        const errorBody = await parseErrorResponse(res);
        throw errorBody;
    }

    const data = await res.json();
    return data.body;
}