import { Sex } from '../common/sex';
import { IPet } from '../contracts/pet';

// tslint:disable-next-line:export-name
export abstract class Animals implements IPet {
    private readonly _price: number;
    private readonly _foodType: string;
    private readonly _sex: Sex;

    constructor(price: number, foodType: string, sex: Sex) {
        if (price < 0 || price > 10000) {
            throw new Error(`Price cannot be less than $0 and over $10 000.`);
        }

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
}
