export interface DataCrop {
    growDays: number;
    name: string;
    priceSell: number;
    regrowth: number;
    season: {
        spring: boolean;
        summer: boolean;
        fall: boolean;
        winter: boolean;
    }
    seedPrice: number;
    type: "vegetable" | "fruit" | "other"
}