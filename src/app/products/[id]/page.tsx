import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductDetail, ProductProperties } from "@/src/components/sections";
import { getProductByID } from "@/src/services/api/ecommerce";

export default async function ProductDetailPage({ params }: any) {
  const { id } = await params;
  const { results } = await getProductByID({ id });

  return (
    <PageWrapper>
      <SectionWrapper>
        <ProductDetail
        //  WIP -- handle 404 not found here
          product={results}
        />
      </SectionWrapper>
      <SectionWrapper>
        <ProductProperties
          product={results}
        />
      </SectionWrapper>
    </PageWrapper>
  );
}
