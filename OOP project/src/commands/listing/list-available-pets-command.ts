import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ICommand } from './../../contratcs/commands/command';
import { IPet } from './../../contratcs/pets-contracts/pets/pet';
@injectable()
export class ListPets implements ICommand {
    private readonly _zooshopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) zooshopDatabase: IZooShopDatabase) {
        this._zooshopDatabase = zooshopDatabase;
    }
    public execute(parameters: string[]): string {
        const petMap: Map<string, IPet[]> = this._zooshopDatabase.pets;
        if (petMap === undefined || petMap.size === 0) {
            throw new Error('There is no pets to show!');
        } else {
            const str: string[] = [];
            petMap.values().next().value.forEach((pet: IPet) => str.push(pet.print()));

            return `>> List available pets\n${str.join('\n###################\n')}`;
        }
    }
}
