import path from "path";
import fs from "fs";
import { ApiResponse, GetProductsResponseBodyDTO } from "@/src/models";
import { getSearchParamsObject } from "@/src/utils/commonUtils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const url = request.url;
    const { offset, limit } = getSearchParamsObject(url);

    try{
        const filePath = path.join(process.cwd(), "public", "data", "products.json");
        const fileContent = fs.readFileSync(filePath, "utf-8");

        const records = JSON.parse(fileContent);
        const recordCount = records.length;
        const json = records.slice(
            Number(offset), 
            Number(offset) + Number(limit) > recordCount ? recordCount : Number(offset) + Number(limit)
        );

        return NextResponse.json<GetProductsResponseBodyDTO>({
            body: {
                results: json,
                count: recordCount
            }
        }, { status: 200 })
    }catch{
        return NextResponse.json<GetProductsResponseBodyDTO>({
            body: "مشکل سرور" 
        }, { status: 500 })
    }
}