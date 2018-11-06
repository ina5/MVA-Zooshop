export interface IProduct {
    // Think about product type, if its suitable for dog cat
    name: string;
    brand: string;
    price: number;
    quantity: number;
    print(): string;
}
