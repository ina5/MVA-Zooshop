import { IPet, IZooshop } from '../contratcs/pets-contracts';

export class Zooshop implements IZooshop {
    private readonly _pets: IPet[];
    private readonly _name: string;

    constructor(name: string) {
        this._name = name;
    }
    public get pets(): IPet[] {
        return this._pets;
    }
    public get name(): string {
        return this._name;
    }

    public sellPet(pet: IPet): void {
        const index: number = this._pets.indexOf(pet);
        this._pets.splice(index, 1);
    }

    public receivePet(pet: IPet): void {
        this._pets.push(pet);
    }

    public petList(): string {
        const printPets: string = this.pets
            .map((pet: IPet) => pet.print())
            .join('\n');

        return `${this.name} has ${printPets}`;
    }
}
