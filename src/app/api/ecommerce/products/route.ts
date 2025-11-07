import path from "path";
import fs from "fs";
import { ApiResponse, GetProductsResponseBodyDTO } from "@/src/models";
import { getSearchParamsObject } from "@/src/utils/commonUtils";

export async function GET(request: Request) {
    const url = request.url;
    const { offset, limit } = getSearchParamsObject(url);

    const filePath = path.join(process.cwd(), "public", "data", "products.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const records = JSON.parse(fileContent);
    const recordCount = records.length;
    const json = records.slice(Number(offset), Number(limit) > recordCount ? recordCount : Number(limit));

    // WIP -- HANDLE possible ERRORS! and different erorr codes

    return Response.json({
        results: json
    });
}