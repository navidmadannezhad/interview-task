import path from "path";
import fs from "fs";
import { ApiResponse, GetProductsResponseBodyDTO } from "@/src/models";

export async function GET(request: Request) {
    const filePath = path.join(process.cwd(), "public", "data", "products.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);

    // WIP -- HANDLE possible ERRORS! and different erorr codes

    return Response.json({
        results: json
    });
}