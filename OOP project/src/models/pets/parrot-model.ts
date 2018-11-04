import { Animals } from '.';
import { Sex } from '..';
import { IBird } from '../../contratcs/pets-contracts';

export class Parrot extends Animals implements IBird {
    private readonly _sing: boolean;
    private readonly _canTalk: boolean;

    constructor(breed: string, price: number, foodType: string, sex: Sex, canTalk: boolean, sing: boolean) {
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
        return `Can talk: ${this.canTalk}
        Can sing: ${this.sing}`;
    }
}
