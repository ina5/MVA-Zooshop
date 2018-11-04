import { Sex } from '..';
import { IPet } from '../../contratcs/pets-contracts';

// tslint:disable-next-line:export-name
export abstract class Animals implements IPet {
    private readonly _price: number;
    private readonly _foodType: string;
    private readonly _sex: Sex;
    private readonly _breed: string;

    constructor(breed: string, price: number, foodType: string, sex: Sex) {
        if (breed.length < 1) {
            throw new Error(`Breed length cannot be less than 1 symbol.`);
        }
        if (price < 1 || price > 10000) {
            throw new Error(`Price cannot be less than 1лв and over 10 000лв.`);
        }
        if (foodType.length < 1) {
            throw new Error(`Food type cannot be less than 1 symbols.`);
        }
        this._breed = breed;
        this._foodType = foodType;
        this._price = price;
        this._sex = sex;
    }

    public get price(): number {
        return this._price;
    }
    public get foodType(): string {
        return this._foodType;
    }
    public get sex(): Sex {
        return this._sex;
    }
    public get breed(): string {
        return this._breed;
    }
    public print(): string {
        return `Breed: ${this.breed}
        Price: ${this.price}
        Food: ${this.foodType}
        Gender: ${this.sex}
        ${this.additionalInfo()}`;
    }
    protected abstract additionalInfo(): string;
}
