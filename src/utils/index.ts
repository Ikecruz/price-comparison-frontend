import { Comparison } from "@/interface";

const getPriceRange = (comparisons: Comparison[]): string => {
    const priceArray = comparisons.map((value) => value.price);
    const min = Math.min(...priceArray);
    const max = Math.max(...priceArray);

    if (min === max) return `£${max}`
    return `£${min}-£${max}`
}

export {
    getPriceRange
}