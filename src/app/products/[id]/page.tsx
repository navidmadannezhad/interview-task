import { PageWrapper, SectionWrapper } from "@/src/components/major";
import { ProductDetail, ProductProperties } from "@/src/components/sections";
import { getProductByID } from "@/src/services/api/ecommerce";
import { Metadata } from "next";
import { notFound } from "next/navigation";
 
export async function generateMetadata(
  { params }: { params: { id: number } }
): Promise<Metadata> {
  const { id } = await params;
  let res;

  try{
    res = await getProductByID({ id })
  }catch(e){
    console.log("Error here")
    console.log(e)
  }

  return {
    title: res?.data?.results?.meta_title ?? "محصول اینترویو شاپ",
    description: res?.data?.results?.meta_description ?? "این یک محصول فوق العاده از فروشگاه ماست!",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${res?.data?.results?.id}`
    }
  };
}

export default async function ProductDetailPage({ params }: any) {
  const { id } = await params;
  let body;

  try{
    body = await getProductByID({ id })
  }catch(e: any){
    if(e.status === 404){
      return notFound();
    }
  }
  

  return (
    <PageWrapper>
      <SectionWrapper>
        <ProductDetail
          product={body?.results}
        />
      </SectionWrapper>
      <SectionWrapper>
        <ProductProperties
          product={body?.results}
        />
      </SectionWrapper>
    </PageWrapper>
  );
}

export const dynamic = "force-dynamic";
