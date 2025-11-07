import path from "path";
import fs from "fs";

export async function GET(request: Request) {
    const filePath = path.join(process.cwd(), "public", "data", "products.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);

    return Response.json({
        results: json
    });
}