import { Animals } from '.';
import { Sex } from '..';
import { IReptile } from '../../contratcs/pets-contracts';

export class Snake extends Animals implements IReptile {
    private readonly _skinColor: string;
    private readonly _isVenomous: boolean;

    constructor(breed: string, price: number, foodType: string, sex: Sex, skinColor: string, isVenomous: boolean) {
        super(breed, price, foodType, sex);
        if (skinColor.length < 3) {
            throw new Error('Skin color length cannot be less than 3 symbols.');
        }
        this._isVenomous = isVenomous;
        this._skinColor = skinColor;
    }
    public get isVenomous(): boolean {
        return this._isVenomous;
    }
    public get skinColor(): string {
        return this._skinColor;
    }
    protected additionalInfo(): string {
        return `Skin color: ${this.skinColor}
        Venomous: ${this.isVenomous}`;
    }
}
