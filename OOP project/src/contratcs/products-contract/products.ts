import { IItem } from '../item-contract';

export interface IProduct extends IItem {
    // Think about product type, if its suitable for dog cat
    name: string;
    brand: string;
    weight: number;
}
