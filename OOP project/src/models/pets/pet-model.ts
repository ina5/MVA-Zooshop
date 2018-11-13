import { IPet } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';
import { Sex } from '../enum/sex';
import { IPrinter } from './../../contratcs/pets-contracts/pets/print';

// tslint:disable-next-line:export-name
export abstract class Animals implements IPet, IPrinter {
    private static _LastId: number = 0;
    private _id: number;
    private readonly _price: number;
    private readonly _foodType: FoodType;
    private readonly _sex: Sex;
    private readonly _breed: string;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex) {
        if (breed.length < 3 || breed.length > 15) {
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
        // tslint:disable-next-line:max-line-length
        return `ID: ${this.id}\nBreed: ${this.breed}\nPrice: ${this.price}lv\nFood: ${this.foodType}\nGender: ${this.sex}\n${this.additionalInfo()}`;
    }
    protected abstract additionalInfo(): string;
}
