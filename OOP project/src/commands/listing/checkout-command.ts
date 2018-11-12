import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IItem } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ClientCommand } from '../abstract/client-command';

@injectable()
export class Checkout extends ClientCommand implements ICommand {
    constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        super(data);
    }
    public execute(parameters: string[]): string {
        let totalPrice: number = 0;
        this._zooShopDatabase.shoppingCart.forEach((item: IItem) => {
            totalPrice += item.price;
        });

        return `\n*****CHECKOUT*****\n${this._zooShopDatabase.shoppingCart.length === 0
            ? Validator.getErrorMessage('Shopping cart is empty.')
            : this._zooShopDatabase.shoppingCart.map((item: IItem) => item.print()).join('\n#####################\n')
            }\nTotal Price: ${totalPrice.toFixed(2)}lv`;
    }
}
