export const enToFaNum = (s: number | string): string | null => {
    if(s === undefined || s === null) return null;

    const number = typeof s === "number" ? String(s) : s; 
    return number.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}
export const faToEnNum = (v: string): string => v ? v?.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)) : "";

export const humanizePrice = (price: number): string | null => {
    return enToFaNum(
        price.toLocaleString("fa-IR")
    )
}