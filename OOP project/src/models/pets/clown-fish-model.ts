import { IFish } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';
import { Sex, WaterType } from '../enum/index';
import { Pet } from './pet-model';

export class ClownFish extends Pet implements IFish {
    private readonly _color: string;
    private readonly _waterType: WaterType;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex, color: string, waterType: WaterType) {
        super(breed, price, foodType, sex);
        if (color.length < 3) {
            throw new Error('Skin color length cannot be less than 3 symbols.');
        }
        this._color = color;
        this._waterType = waterType;

    }
    public get color(): string {
        return this._color;
    }
    public get waterType(): WaterType {
        return this._waterType;
    }
    public info(): string {
        return `${super.info()}Skin color: ${this.color}\nAquatic environment: ${this.waterType}`;
    }
}
