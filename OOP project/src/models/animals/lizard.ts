import { Sex } from '../common/sex';
import { IReptile } from './../contracts/reptile';
import { Animals } from './animals-model';

// tslint:disable-next-line:export-name
export class Lizard extends Animals implements IReptile {
    private readonly _isVenomous: boolean;

    constructor(price: number, foodType: string, sex: Sex, isVenomous: boolean) {
        super(price, foodType, sex);
    }
    public get isVenomous(): boolean {
        return this._isVenomous;
    }
}
