import { Sex } from '../../../models';
import { IPrinter } from './print';

export interface IPet extends IPrinter {
    price: number;
    foodType: string;
    sex: Sex;
    breed: string;
}
