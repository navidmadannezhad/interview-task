import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductsList } from "@/src/components/sections";
import { products } from "../data/products";

export default function ProductPage() {
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
