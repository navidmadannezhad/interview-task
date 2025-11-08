import { PaginationSearhParams } from "@/src/models";

export const paginationInitialState: PaginationSearhParams = {
    offset: 0,
    limit: 8
}

export const MANUAL_PAGINATION_START_COUNT = 3;

export const CART_ITEM_LIFE = 60 * 30 * 1000;