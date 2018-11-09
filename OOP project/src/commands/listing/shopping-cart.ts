import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IPet, IProduct } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';

@injectable()
export class Checkout implements ICommand {
    private readonly _zooshopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) zooshopDatabase: IZooShopDatabase) {
        this._zooshopDatabase = zooshopDatabase;
    }
    public execute(parameters: string[]): string {
        let totalPrice: number = 0;
        this._zooshopDatabase.shoppingCart.forEach((item: IPet | IProduct) => {
            totalPrice += item.price;
        });

        return `\n*****CHECKOUT*****\n${this._zooshopDatabase.shoppingCart.length === 0
            ? Validator.getErrorMessage('Shopping cart is empty.')
            : this._zooshopDatabase.shoppingCart.map((item: IPet | IProduct) => item.print()).join('\n#####################\n')
            }\nTotal Price: ${totalPrice.toFixed(2)}lv`;
    }
}
