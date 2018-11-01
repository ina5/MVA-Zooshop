import { Sex } from '../common/sex';
import { IReptile } from './../contracts/reptile';
import { Animals } from './animals-model';

export class Snake extends Animals implements IReptile {
    private readonly _isVenomous: boolean;

    constructor(price: number, foodType: string, sex: Sex, isVenomous: boolean) {
        super(price, foodType, sex);
        this._isVenomous = isVenomous;
    }
    public get isVenomous(): boolean {
        return this._isVenomous;
    }
}
