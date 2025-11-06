export interface Product {
    id: number;
    title: string;
    main_price: number;
    discount_price: number;
    thumbnail: string;
    short_description: string;
    long_description: string;
    meta_title: string;
    meta_description: string;
    created_at: Date;
}