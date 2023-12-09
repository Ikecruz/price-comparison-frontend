export interface Model {
    name: string
}

export interface Comparison {
    name: string;
    price: number;
    url: string
}

export interface Phone {
    id: number;
    cellular: string;
    image_url: string;
    storage: string;
    comparisons: Comparison[];
    model?: Model
}