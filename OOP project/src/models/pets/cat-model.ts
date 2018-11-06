import { IMammal } from '../../contratcs/pets-contracts';
import { FoodType } from '../enum/food-type';
import { DifficultyDegree, FurType, Sex } from '../enum/index';
import { Animals } from './pet-model';

export class Cat extends Animals implements IMammal {
    private readonly _trainable: DifficultyDegree;
    private readonly _social: boolean;
    private readonly _furType: FurType;

    constructor(breed: string, price: number, foodType: FoodType, sex: Sex,
                furType: FurType, trainable: DifficultyDegree, social: boolean) {
        super(breed, price, foodType, sex);
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
    protected additionalInfo(): string {
        const nature: string = this._social === true ? 'yes' : 'no';

        return `Fur type: ${this.furType}\nTrainable: ${this.trainable}\nIs it social: ${nature}`;
    }
}
