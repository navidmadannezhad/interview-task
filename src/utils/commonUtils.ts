export const enToFaNum = (s: number | string): string | null => {
    if(s === undefined || s === null) return null;

    const number = typeof s === "number" ? String(s) : s; 
    // WIP -- solve any here!
    return number.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d as any]);
}
export const faToEnNum = (v: string): string => v ? v?.replace(/[۰-۹]/g, d => ('۰۱۲۳۴۵۶۷۸۹' as any).indexOf(d)) : "";

export const humanizePrice = (price: number): string | null => {
    return enToFaNum(
        price.toLocaleString("fa-IR")
    )
}