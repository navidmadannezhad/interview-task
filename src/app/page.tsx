import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductsList } from "@/src/components/sections";
import { getProducts } from "@/src/services/api/ecommerce";
import { paginationInitialState } from "@/src/configs/major";

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  const { results } = await getProducts({
    searchParams: paginationInitialState
  });

  throw new Error("We got a random error lmao")
  
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
