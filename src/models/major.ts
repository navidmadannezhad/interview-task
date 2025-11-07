export type SimpleSearchParamsObject = Record<string, string | Array<string | number>>;

export interface PaginationSearhParams {
    offset: number;
    limit: number;
}

export interface QueryArgs<S = {}, H = {}> {
    searchParams: S;
}