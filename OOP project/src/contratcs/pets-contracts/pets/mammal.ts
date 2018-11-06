import { DifficultyDegree, FurType } from '../../../models';
import { IPet } from './pet';

export interface IMammal extends IPet {
    furType: FurType;
    trainable: DifficultyDegree;
    social: boolean;
}
