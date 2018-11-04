import { Animals } from '.';
import { Sex, WaterType } from '..';
import { IFish } from '../../contratcs/pets-contracts';

export class ClownFish extends Animals implements IFish {
    private readonly _color: string;
    private readonly _waterType: WaterType;

    constructor(breed: string, price: number, foodType: string, sex: Sex, color: string, waterType: WaterType) {
        super(breed, price, foodType, sex);
        if (color.length < 3) {
            throw new Error('Skin color length cannot be less than 3 symbols.');
        }
        this._waterType = waterType;
        this._color = color;
    }
    public get color(): string {
        return this._color;
    }
    public get waterType(): WaterType {
        return this._waterType;
    }
    protected additionalInfo(): string {
        return `Skin color: ${this.color}
        Aquatic environment: ${this.waterType}`;
    }
}
