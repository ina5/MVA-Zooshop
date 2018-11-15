import { IProduct } from '../../contratcs';

export class PetFood implements IProduct {

    private readonly _name: string;
    private readonly _brand: string;
    private readonly _price: number;
    private readonly _weight: number;

    constructor(name: string, brand: string, price: number, weight: number) {
        if (name.length < 3) {
            throw new Error('Name length cannot be less than 3 symbols');
        }
        if (brand.length < 3) {
            throw new Error('Brand length cannot be less than 3 symbols');
        }
        // tslint:disable-next-line:number-literal-format
        if (price < 0.10) {
            throw new Error('Price cannot be less than 0.10lv.');
        }
        if (weight < 100) {
            throw new Error('Required weight is 100.');
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
