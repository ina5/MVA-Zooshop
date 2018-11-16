
import { IMammal } from '../../contratcs/pets-contracts';
import { DifficultyDegree, FurType, Sex } from '../enum/index';
import { FoodType } from './../enum/food-type';
import { Pet } from './pet-model';

export class Cat extends Pet implements IMammal {
    private readonly _trainable: DifficultyDegree;
    private readonly _social: boolean;
    private readonly _furType: FurType;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex,
                furType: FurType, trainable: DifficultyDegree, social: boolean) {
        super(breed, price, foodType, sex);
        if (!Object.values(FurType).includes(furType)) {
            throw new Error('Furtype must be from type: long or short!');
        }
        if (!Object.values(DifficultyDegree).includes(trainable)) {
            throw new Error('Trainable must be from type: easy, normal, hard or challeging!');
        }
        if (social !== true && social !== false) {
            throw new Error('Social is not valid!');
        }
        this._furType = furType;
        this._trainable = trainable;
        this._social = social;
    }
    public get trainable(): DifficultyDegree {
        return this._trainable;
    }
    public get furType(): FurType {
        return this._furType;
    }
    public get social(): boolean {
        return this._social;
    }

    public info(): string {
        const nature: string = this._social === true ? 'yes' : 'no';

        return `${super.info()}Fur type: ${this.furType}\nTrainable: ${this.trainable}\nIs it social: ${nature}`;
    }
}
