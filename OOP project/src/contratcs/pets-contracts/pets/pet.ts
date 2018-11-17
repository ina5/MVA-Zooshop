import { Sex } from '../../../models';
import { FoodType } from '../../../models/enum/food-type';
import { IItem } from '../../item-contract';

export interface IPet extends IItem {
    id: number;
    foodType: FoodType;
    sex: Sex;
    breed: string;
}
