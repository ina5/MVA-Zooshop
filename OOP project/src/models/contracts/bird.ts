import { IPet } from './pet';

export interface IBird extends IPet {
    canTalk: boolean;
    species: string;
}
