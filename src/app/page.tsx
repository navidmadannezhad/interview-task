import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductsList } from "@/src/components/sections";
import { getProducts } from "@/src/services/api/ecommerce";

export const dynamic = "force-dynamic";

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
