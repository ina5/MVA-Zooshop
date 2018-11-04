import { Sex } from '..';
import { IPet } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';

// tslint:disable-next-line:export-name
export abstract class Animals implements IPet {
    public static _LastId: number = 0;
    private _id: number;
    private readonly _price: number;
    private readonly _foodType: FoodType;
    private readonly _sex: Sex;
    private readonly _breed: string;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex) {
        if (breed.length < 1) {
            throw new Error(`Breed length cannot be less than 1 symbol.`);
        }
        if (price < 1 || price > 10000) {
            throw new Error(`Price cannot be less than 1лв and over 10 000лв.`);
        }
        Animals._LastId += 1;
        this._id = Animals._LastId;
        this._breed = breed;
        this._price = price;
        this._foodType = foodType;
        this._sex = sex;

    }

    public get id(): number {
        return this._id;
    }

    public get price(): number {
        return this._price;
    }
    public get foodType(): FoodType {
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
