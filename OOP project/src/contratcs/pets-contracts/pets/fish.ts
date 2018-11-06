import { WaterType } from '../../../models';
import { IPet } from './pet';

export interface IFish extends IPet {
    waterType: WaterType;
    color: string;
}
