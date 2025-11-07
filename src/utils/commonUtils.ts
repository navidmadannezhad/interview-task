import { SimpleSearchParamsObject } from "../models";

export const enToFaNum = (s: number | string): string | null => {
    if(s === undefined || s === null) return null;

    const number = typeof s === "number" ? String(s) : s; 
    // WIP -- solve any here!
    return number.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d as any]);
}
export const faToEnNum = (v: string): string => v ? v?.replace(/[۰-۹]/g, d => ('۰۱۲۳۴۵۶۷۸۹' as any).indexOf(d)) : "";

export const humanizePrice = (price: number | undefined): string | null => {
    if(!price) return null;
    
    return enToFaNum(
        price.toLocaleString("fa-IR")
    )
}

export const getSearchParamsString = <T = SimpleSearchParamsObject>(obj: any): string => {
    const searchParams = new URLSearchParams("");
    // WIP -- type problem here
    Object.keys(obj).map((key: string) => {
        if(typeof obj[key] === "object"){
            searchParams.set(key, obj[key].join(","))
        }else{
            searchParams.set(key, obj[key])
        }
    })

    return searchParams.toString();
}