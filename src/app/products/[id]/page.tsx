import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductDetail, ProductProperties } from "@/src/components/sections";
import { products } from "@/src/data/products";
import { Product } from "@/src/models";

const product: Product = {
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
}

export default async function ProductDetailPage({ params }: any) {
  const { id } = await params;
  const product = products.find(product => product.id === id) ?? products[0];

  return (
    <PageWrapper>
      <SectionWrapper>
        <ProductDetail
        //  WIP -- handle 404 not found here
          product={product}
        />
      </SectionWrapper>
      <SectionWrapper>
        <ProductProperties
          product={product}
        />
      </SectionWrapper>
    </PageWrapper>
  );
}
