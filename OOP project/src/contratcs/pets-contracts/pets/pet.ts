import { Sex } from '../../../models';
import { IPrinter } from './print';
import { FoodType } from '../../../models/enum/food-type';

export interface IPet extends IPrinter {
    id: number;
    price: number;
    foodType: FoodType;
    sex: Sex;
    breed: string;
}
