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
        return `List avaliable pets\n
        ${Object.values(this._zooshopDatabase.pets).map((pet: IPet) => `${pet.print()}\n#####################\n`)}`;
    }
    // return `>> List available pets.\n${this._zooshopDatabase.pets.size === 0
    //     ? 'There are no available pets at the moment...sorry.'
    //     : this._zooshopDatabase.pets.map((pet: IPet) => pet.print()).join('\n#####################\n')
    //     }`;

}
