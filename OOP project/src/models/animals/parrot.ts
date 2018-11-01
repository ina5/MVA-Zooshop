import { Sex } from '../common/sex';
import { IBird } from './../contracts/bird';
import { Animals } from './animals-model';
class Parrot extends Animals implements IBird {
    private readonly _species: string;
    private readonly _sing: boolean;
    private readonly _canTalk: boolean;

    constructor(species: string, price: number, foodType: string, sex: Sex, canTalk: boolean, sing: boolean) {
        super(price, foodType, sex);
        this._canTalk = canTalk;
        this._sing = sing;
        this._species = species;
    }

    public get species(): string {
        return this._species;
    }
    public get canTalk(): boolean {
        return this._canTalk;
    }
    public get sing(): boolean {
        return this._sing;
    }
}
