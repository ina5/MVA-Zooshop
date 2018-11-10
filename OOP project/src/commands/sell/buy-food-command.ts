import { inject, injectable } from 'inversify';

import { ICommand, IPet, IProduct } from '../../contratcs';

import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';

import { TYPES } from '../../common';

import { Validator } from '../../common/validator';
import { ClientCommand } from '../abstract/client-command';

@injectable()
export class BuyFood extends ClientCommand implements ICommand {

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        super(data);
    }
    public execute(parameters: string[]): string {
        const [name, quantity] = parameters;

        const foundProductIndex: number = this._zooShopDatabase.products.findIndex((food: IProduct) => food.name === name);
        const quantityNumber: number = (Number(quantity));
        const productItem: IProduct = this._zooShopDatabase.products[foundProductIndex];
        productItem.quantity = quantityNumber;
        this._zooShopDatabase.shoppingCart.push(productItem);
        if (foundProductIndex === -1) {
            return Validator.getFoodNotFoundErrorMessage(name);
        }
        if (this._zooShopDatabase.products[foundProductIndex].quantity - quantityNumber === 0) {
            this._zooShopDatabase.products.splice(foundProductIndex, 1);
        } else {
            this._zooShopDatabase.products[foundProductIndex].quantity -= quantityNumber;
        }

        return Validator.getFoodRemovedMessage(name);
    }
}
