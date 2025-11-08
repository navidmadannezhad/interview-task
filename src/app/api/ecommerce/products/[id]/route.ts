import path from "path";
import fs from "fs";
import { GetProductByIDResponseBodyDTO, Product } from "@/src/models";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: RouteContext<'/api/ecommerce/products/[id]'>) {
    const params = await context?.params;
    const { id }  = params;

    console.log("server running")

    try{
        const filePath = path.join(process.cwd(), "public", "data", "products.json");
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const json = JSON.parse(fileContent);

        const product = json.find((product: Product) => String(product.id) === id);
        if(!product){
            return NextResponse.json<GetProductByIDResponseBodyDTO>({
                body: "یافت نشد"
            }, { status: 404 })
        }

        return NextResponse.json<GetProductByIDResponseBodyDTO>({
            body: {
                results: product
            }
        }, { status: 200 })
    }catch{
        return NextResponse.json<GetProductByIDResponseBodyDTO>({
            body: "مشکل سرور"
        }, { status: 500 })
    }
}