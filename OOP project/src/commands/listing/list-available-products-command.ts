import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { IPet, IProduct } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ICommand } from './../../contratcs/commands/command';
@injectable()
export class ListProducts implements ICommand {
    private readonly _zooshopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) zooshopDatabase: IZooShopDatabase) {
        this._zooshopDatabase = zooshopDatabase;
    }
    public execute(parameters: string[]): string {
        return `>> List available products.\n${this._zooshopDatabase.products.length === 0
            ? 'There are no received pets at the moment...sorry.'
            : this._zooshopDatabase.products.map((product: IProduct) => product.print()).join('\n#####################\n')
            }`;
    }
}
