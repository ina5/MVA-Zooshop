import { IBird } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';
import { Sex } from '../enum/sex';
import { Animals } from './pet-model';

export class Parrot extends Animals implements IBird {
    private readonly _sing: boolean;
    private readonly _canTalk: boolean;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex, canTalk: boolean, sing: boolean) {
        super(breed, price, foodType, sex);
        this._canTalk = canTalk;
        this._sing = sing;
    }
    public get canTalk(): boolean {
        return this._canTalk;
    }
    public get sing(): boolean {
        return this._sing;
    }
    protected additionalInfo(): string {
        const canTalkToString: string = this._canTalk === true ? 'yes' : 'no';
        const canSingToString: string = this._sing === true ? 'yes' : 'no';

        return `Can talk: ${canTalkToString}\nCan sing: ${canSingToString}`;
    }
}
