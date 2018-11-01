import { Sex } from '../common/sex';
import { FurType } from './../common/fur';
import { IMammal } from './../contracts/mammal';
import { Animals } from './animals-model';

export class Dog extends Animals implements IMammal {
    private readonly _lifeExpectancy: number;
    private readonly _trainable: boolean;
    private readonly _breed: string;
    private readonly _furType: FurType;

    constructor(breed: string, price: number, foodType: string, sex: Sex, furType: FurType, trainable: boolean) {
        super(price, foodType, sex);
        this._furType = furType;
        this._trainable = trainable;
        this._breed = breed;
    }
    public get furType(): FurType {
        return this._furType;
    }
    public get breed(): string {
        return this._breed;
    }
    public get trainable(): boolean {
        return this._trainable;
    }
}
