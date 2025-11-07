import { PaginationSearhParams } from "./major";

export interface Product {
    id: number;
    title: string;
    main_price: number;
    discount_price?: number;
    thumbnail: string;
    short_description: string;
    long_description: string;
    meta_title: string;
    meta_description: string;
    created_at: string;
    updated_at: string;
    discount_active_until?: string;
    properties?: Record<string, string | number>;
}

export type GetProductsRequestBodyDTO = Product;

export interface GetProductsRequestSearchParamsDTO extends PaginationSearhParams {}