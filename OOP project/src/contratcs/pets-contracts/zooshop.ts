import { IPet } from './pets/index';

export interface IZooshop {
    name: string;
    pets: IPet[];
    receivePet(pet: IPet): void;
    sellPet(pet: IPet): void;
    petList(): string;
}
