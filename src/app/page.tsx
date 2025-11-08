import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductsList } from "@/src/components/sections";
import { getProducts } from "@/src/services/api/ecommerce";
import { paginationInitialState } from "@/src/configs/major";

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  let body;
  try{
    body = await getProducts({
      searchParams: paginationInitialState
    });
  }catch{}
  
  return (
    <PageWrapper>
      <SectionWrapper>
        <ProductsList
          products={body?.results}
        />
      </SectionWrapper>
    </PageWrapper>
  );
}
