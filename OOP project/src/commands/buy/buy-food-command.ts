import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IProduct } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ClientCommand } from '../abstract/client-command';

@injectable()
export class BuyFood extends ClientCommand implements ICommand {

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        super(data);
    }
    public execute(parameters: string[]): string {
        const [name] = parameters;
        super.execute(parameters);
        const foundProductIndex: number = this._zooShopDatabase.products.findIndex((food: IProduct) => food.name === name);
        if (foundProductIndex === -1) {
            return Validator.getFoodNotFoundErrorMessage(name);
        } else {
            this._zooShopDatabase.shoppingCart.push(this._zooShopDatabase.products[foundProductIndex]);
            this._zooShopDatabase.products.splice(foundProductIndex, 1);

            return Validator.getFoodRemovedMessage(name);
        }
    }
}
