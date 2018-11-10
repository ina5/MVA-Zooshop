import { IPrinter } from './../pets-contracts/pets/print';
export interface IProduct extends IPrinter {
    // Think about product type, if its suitable for dog cat
    name: string;
    brand: string;
    price: number;
    weight: number;
}
