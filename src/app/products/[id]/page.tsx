import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductDetail, ProductProperties } from "@/src/components/sections";
import { getProductByID } from "@/src/services/api/ecommerce";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { id: number } }
): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductByID({ id });

  return {
    title: product?.results?.meta_title ?? "محصول اینترویو شاپ",
    description: product?.results?.meta_description ?? "این یک محصول فوق العاده از فروشگاه ماست!",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${product?.results?.id}`
    }
  };
}

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
      {results.properties ? (
        <SectionWrapper>
          <ProductProperties
            product={results}
          />
        </SectionWrapper>
      ) : null}
    </PageWrapper>
  );
}

export const dynamic = "force-dynamic";
