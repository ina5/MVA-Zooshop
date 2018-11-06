import { IPet } from './pet';

export interface IReptile extends IPet {
    isVenomous: boolean;
    skinColor: string;
}
