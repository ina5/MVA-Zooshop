import { IProduct } from '../../contratcs';

export class PetFood implements IProduct {

    private readonly _name: string;
    private readonly _brand: string;
    private readonly _price: number;
    private readonly _weight: number;

    constructor(name: string, brand: string, price: number, weight: number) {
        if (name.length < 3 || name.length > 20) {
            throw new Error('Name length cannot be less than 3 and more than 20 symbols');
        }
        if (brand.length < 3 || brand.length > 20) {
            throw new Error('Brand length cannot be less than 3 and more than 20 symbols');
        }
        // tslint:disable-next-line:number-literal-format
        if (price < 0.10 || price > 200) {
            throw new Error('Price cannot be less than 0.10lv and more than 200v.');
        }
        if (weight < 100 || weight > 10000) {
            throw new Error('Weight should be between 100g and 10 000g.');
        }
        this._name = name;
        this._brand = brand;
        this._price = price;
        this._weight = weight;
    }
    public get name(): string {
        return this._name;
    }
    public get brand(): string {
        return this._brand;
    }
    public get price(): number {
        return this._price;
    }
    public get weight(): number {
        return this._weight;
    }
    public info(): string {
        return `${this.name} ${this.brand}\nPrice: ${this.price}lv\nWeight: ${this.weight}g`;
    }
}
