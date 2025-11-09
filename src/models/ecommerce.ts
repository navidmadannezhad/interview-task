import { PaginationSearhParams, Response } from "./major";

export interface Product {
    id: number;
    name: string;
    main_price: number;
    discount_price?: number;
    imageUrl: string;
    short_description: string;
    long_description: string;
    meta_title: string;
    meta_description: string;
    created_at: string;
    updated_at: string;
    discount_active_until?: string;
    properties?: Record<string, string | number>;
    available_count: number;
}


export interface CartItem{
    product: Product;
    count: number;
    created_at: string;
}

export type GetProductsResponseBodyDTO = Response<{
    results: Product[];
    count: number;
} | string>;
export type GetProductByIDResponseBodyDTO = Response<{
    results: Product;
} | string>;

export interface GetProductsRequestSearchParamsDTO extends PaginationSearhParams {}

export interface ApiResponse<T, > {
    results: T;
    code: number;
}