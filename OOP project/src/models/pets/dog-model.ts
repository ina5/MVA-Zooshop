import { IMammal } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';
import { DifficultyDegree, FurType, Sex } from '../enum/index';
import { Pet } from './pet-model';

export class Dog extends Pet implements IMammal {
    private readonly _social: boolean;
    private readonly _trainable: DifficultyDegree;
    private readonly _furType: FurType;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex,
                furType: FurType, trainable: DifficultyDegree, social: boolean) {
        super(breed, price, foodType, sex);
        this._furType = furType;
        this._trainable = trainable;
        this._social = social;
    }
    public get social(): boolean {
        return this._social;
    }
    public get furType(): FurType {
        return this._furType;
    }
    public get trainable(): DifficultyDegree {
        return this._trainable;
    }

    public info(): string {
        const booleanToString: string = this._social === true ? 'yes' : 'no';

        return `${super.info()}Fur type: ${this.furType}\nTrainable: ${this.trainable}\nIs it social: ${booleanToString}`;
    }
}
