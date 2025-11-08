import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductDetail, ProductProperties } from "@/src/components/sections";
import { getProductByID } from "@/src/services/api/ecommerce";
import { Metadata } from "next";
import { cache } from "react";
 
export async function generateMetadata(
  { params }: { params: { id: number } }
): Promise<Metadata> {
  const { id } = await params;

  const cached = cache(getProductByID)
  const { results } = await cached({ id });

  return {
    title: results?.meta_title ?? "محصول اینترویو شاپ",
    description: results?.meta_description ?? "این یک محصول فوق العاده از فروشگاه ماست!",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${results?.id}`
    }
  };
}

// https://nextjs.org/docs/app/api-reference/config/next-config-js/logging

export default async function ProductDetailPage({ params }: any) {
  const { id } = await params;
  const cached = cache(getProductByID)
  const { results } = await cached({ id });

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
