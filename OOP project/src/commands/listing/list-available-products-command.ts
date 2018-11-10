import { inject, injectable } from 'inversify';
import { TYPES, Validator } from '../../common';
import { IProduct } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ICommand } from './../../contratcs/commands/command';
@injectable()
export class ListProducts implements ICommand {
    private readonly _zooshopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) zooshopDatabase: IZooShopDatabase) {
        this._zooshopDatabase = zooshopDatabase;
    }
    public execute(parameters: string[]): string {
        return `\n>> List available products.\n#####################\n${this._zooshopDatabase.products.length === 0
            ? Validator.getErrorMessage('There are no available foods at the moment...sorry.')
            : this._zooshopDatabase.products.map((product: IProduct) => product.print()).join('\n\n')
            }\n#####################\n`;
    }
}
