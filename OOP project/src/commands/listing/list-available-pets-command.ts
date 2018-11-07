import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { IPet } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ICommand } from './../../contratcs/commands/command';
@injectable()
export class ListPets implements ICommand {
    private readonly _zooshopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) zooshopDatabase: IZooShopDatabase) {
        this._zooshopDatabase = zooshopDatabase;
    }
    public execute(parameters: string[]): string {
        return `>> List available pets.\n${this._zooshopDatabase.pets.length === 0
            ? 'There are no received pets at the moment...sorry.'
            : this._zooshopDatabase.pets.map((pet: IPet) => pet.print()).join('\n#####################\n')
            }`;
    }
}
