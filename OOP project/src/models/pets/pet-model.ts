import { isNullOrUndefined } from 'util';
import { IPet } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';
import { Sex } from '../enum/sex';

export abstract class Pet implements IPet {
    private static _LastId: number = 0;
    private _id: number;
    private _price: number;
    private _foodType: FoodType;
    private _sex: Sex;
    private _breed: string;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex) {
        if (price > 10000 || price < 1) {
            throw new Error(`Price cannot be less than 1lv and over 10 000lv.`);
        }
        if (breed.length < 3 || breed.length > 15) {
            throw new Error(`Breed length cannot be less than 1 symbol and more than 15 symbols.`);
        }
        if (!Object.values(FoodType).includes(foodType)) {
            throw new Error('FoodType must be from type: Food!');
        }
        if (!Object.values(Sex).includes(sex)) {
            throw new Error('Sex must be from type: male or female!');
        }
        Pet._LastId += 1;
        this._id = Pet._LastId;
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

    public info(): string {
        // tslint:disable-next-line:max-line-length
        return `ID: ${this.id}\nBreed: ${this.breed}\nPrice: ${this.price}lv\nFood: ${this.foodType}\nGender: ${this.sex}\n`;
    }
    // FOR TESTING
    protected clear(): void {
        this._id = 0;
    }
}
