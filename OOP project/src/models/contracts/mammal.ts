import { FurType } from '../common/fur';
import { IPet } from './pet';

export interface IMammal extends IPet {
    furType: FurType;
    breed: string;
}
