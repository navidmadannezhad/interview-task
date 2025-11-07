import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductsList } from "@/src/components/sections";
import { products } from "../data/products";
import { getProducts } from "@/src/services/api/ecommerce";

export default async function ProductPage() {
  const { results } = await getProducts({
    searchParams: { offset: 0, limit: 10 }
  });
  
  return (
    <PageWrapper>
      <SectionWrapper>
        <ProductsList
          products={results}
        />
      </SectionWrapper>
    </PageWrapper>
  );
}
