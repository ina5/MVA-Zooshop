import { IMammal } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';
import { DifficultyDegree, FurType, Sex } from '../enum/index';
import { Animals } from './pet-model';

export class Dog extends Animals implements IMammal {
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

    protected additionalInfo(): string {
        return `Fur type: ${this.furType}
        Trainable: ${this.trainable}
        Is it social ${this.social}`;
    }
}
