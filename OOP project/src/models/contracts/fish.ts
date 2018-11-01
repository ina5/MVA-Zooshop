import { WaterType } from '../common/water';
import { IPet } from './pet';

export interface IFish extends IPet {
    species: string;
    waterType: WaterType;
    color: string;
    size: string;
}
