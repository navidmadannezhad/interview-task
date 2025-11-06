import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductsList } from "@/src/components/sections";
import { Product } from "../models";

const products: Product[] = [
  {
    id: 0,
    title: "محصول تستی",
    main_price: 100000,
    discount_price: 200000,
    thumbnail: "/images/test-product.jpeg",
    short_description: "هه",
    long_description: "توضیحات بیشتر",
    meta_title: "Test meta title",
    meta_description: "desc",
    created_at: new Date()
  },
  {
    id: 1,
    title: "محصول تستی",
    main_price: 5345,
    discount_price: 3213123,
    thumbnail: "/images/test-product.jpeg",
    short_description: "هه",
    long_description: "توضیحات بیشتر",
    meta_title: "Test meta title",
    meta_description: "desc",
    created_at: new Date()
  },
  {
    id: 2,
    title: "محصول تستی",
    main_price: 100,
    discount_price: 200,
    thumbnail: "/images/test-product.jpeg",
    short_description: "هه",
    long_description: "توضیحات بیشتر",
    meta_title: "Test meta title",
    meta_description: "desc",
    created_at: new Date()
  },
  {
    id: 3,
    title: "محصول تستی",
    main_price: 100,
    discount_price: 200,
    thumbnail: "/images/test-product.jpeg",
    short_description: "هه",
    long_description: "توضیحات بیشتر",
    meta_title: "Test meta title",
    meta_description: "desc",
    created_at: new Date()
  },
  {
    id: 4,
    title: "محصول تستی",
    main_price: 100,
    discount_price: 200,
    thumbnail: "/images/test-product.jpeg",
    short_description: "هه",
    long_description: "توضیحات بیشتر",
    meta_title: "Test meta title",
    meta_description: "desc",
    created_at: new Date()
  },
]

export default function Home() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <ProductsList
          products={products}
        />
      </SectionWrapper>
    </PageWrapper>
  );
}
