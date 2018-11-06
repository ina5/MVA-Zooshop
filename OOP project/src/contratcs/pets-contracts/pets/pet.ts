import { Sex } from '../../../models';
import { FoodType } from '../../../models/enum/food-type';
import { IPrinter } from './print';

export interface IPet extends IPrinter  {
    id: number;
    price: number;
    foodType: FoodType;
    sex: Sex;
    breed: string;
}
