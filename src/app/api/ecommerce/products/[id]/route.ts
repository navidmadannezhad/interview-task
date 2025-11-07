import path from "path";
import fs from "fs";
import { Product } from "@/src/models";

export async function GET(request: Request, context: RouteContext<'/api/ecommerce/products/[id]'>) {
    const params = await context?.params;
    console.log(params)
    const { id }  = params;

    // WIP -- HANDLE possible ERRORS! and different erorr codes
    const filePath = path.join(process.cwd(), "public", "data", "products.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);

    const product = json.find((product: Product) => String(product.id) === id);

    console.log("id is ", id)
    console.log(product)

    return Response.json({
        results: product
    });
}