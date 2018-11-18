import { inject, injectable } from 'inversify';
import { TYPES, Validator } from '../../common';
import { IProduct } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ClientCommand } from '../abstract/client-command';
import { ICommand } from './../../contratcs/commands/command';
@injectable()
export class ListProducts extends ClientCommand implements ICommand {
    private readonly _zooshopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        super(data);
    }
    public execute(parameters: string[]): string {
        super.execute(parameters);

        return `\n<< List available products. >>\n${this._zooshopDatabase.products.length === 0
            ? Validator.getErrorMessage('there is no available foods at the moment...sorry.')
            : this._zooshopDatabase.products.map((product: IProduct) => product.info()).join('\n\n')
            }\n\n`;
    }
}
