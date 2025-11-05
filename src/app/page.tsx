import { PageWrapper } from "@/src/components/major";
import { ProductsList } from "@/src/components/sections";
import { Product } from "../models";

const products: Product[] = [
  {
    title: "محصول تستی",
    main_price: 100,
    discount_price: 200,
    thumbnail: "/images/test.jpeg",
    short_description: "هه",
    long_description: "توضیحات بیشتر",
    meta_title: "Test meta title",
    meta_description: "desc",
    created_at: new Date()
  }
]

export default function Home() {
  return (
    <PageWrapper>
      <ProductsList
        products={products}
      />
    </PageWrapper>
  );
}
