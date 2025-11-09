import { expect, test, describe } from 'vitest'
import { 
    humanizePrice,
    getSearchParamsString,
    getSearchParamsObject,
    getTimeStampFromISOTime
} from "@/src/utils/commonUtils"

describe("Common Utility Functions", () => {
    test('Humanizes Price', () => {
        const testEnPrice = 39900000;
        const correctResult = "۳۹٬۹۰۰٬۰۰۰";

        const result = humanizePrice(testEnPrice);
        expect(result).toBe(correctResult);
    })

    test('Get SearchParam String From Object', () => {
        const testObject = {
            price: "39900000",
            category: ["electronics", "appliances"]
        };
        const correctResult = "price=39900000&category=electronics%2Cappliances";

        const result = getSearchParamsString(testObject);
        expect(result).toBe(correctResult);
    })

    test('Get SearchParam Object From String', () => {
        const testString = "test.com?price=39900000&category=electronics,appliances";
        const correctResult = {
            price: "39900000",
            category: ["electronics", "appliances"]
        };

        const result = getSearchParamsObject(testString);
        expect(result).toEqual(correctResult);
    })

    test('Get Time Stamp from ISO Time', () => {
        const testTime = "2025-11-08T16:00:00Z";
        const correctResult = 1762617600000;

        const result = getTimeStampFromISOTime(testTime);
        expect(result).toEqual(correctResult);
    })
})