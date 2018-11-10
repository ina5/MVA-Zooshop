import { inject, injectable } from 'inversify';
import { TYPES, Validator } from '../../common';
import { ICommand, IModelsFactory, IProduct } from '../../contratcs';
import { IZooShopDatabase } from './../../contratcs/data-contract/zooShop-database';

@injectable()
export class ReceiveFood implements ICommand {
    private _factory: IModelsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.productFactory) factory: IModelsFactory) {
        this._zooShopDatabase = data;
        this._factory = factory;

    }
    public execute(parameters: string[]): string {
        const [name, brand, price, weight] = parameters;

        if (isNaN(+price) || isNaN(+weight)) {
            throw new Error('Failed to parse ReceiveFood command parameters.');
        }
        const food: IProduct = this._factory.receiveFood(name, brand, +price, +weight);
        this._zooShopDatabase.products.push(food);

        return Validator.getFoodReceivedMessage(brand);
    }
}
