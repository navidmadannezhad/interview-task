import { ErrorResponse, SimpleSearchParamsObject } from "../models";

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

export const getSearchParamsObject = (url: string): SimpleSearchParamsObject => {
    const paramsObject: SimpleSearchParamsObject = {};
    if(
        url?.split("?").length > 2 ||
        url?.split("?").length === 1
    ) return {};

    const paramsString = url?.split("?")[1];
    const searchParams = new URLSearchParams(paramsString);

    for(const [key, value] of searchParams){
        if(value.split(",").length > 1){
            paramsObject[key] = value.split(",")
        }else{
            paramsObject[key] = value
        }
    }

    return paramsObject;
}

export const getTimeStampFromISOTime = (iso: string): number => {
    if(!iso) return 0;
    // Always parse as UTC to avoid timezone differences between environments
    const date = new Date(iso + (iso.includes('T') && !iso.includes('Z') && !iso.includes('+') ? 'Z' : ''));
    return date.getTime();
}

export const parseErrorResponse = async (res: Response): Promise<ErrorResponse> => {
    const data = await res.json();
    return {
        message: data.body,
        status: res.status
    }
}