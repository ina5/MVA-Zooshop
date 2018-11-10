import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IModelsFactory, IProduct } from '../../contratcs';
import { EmployeeCommand } from '../abstract/employee-command';
import { IZooShopDatabase } from './../../contratcs/data-contract/zooShop-database';

@injectable()
export class ReceiveFood extends EmployeeCommand implements ICommand {
    private _factory: IModelsFactory;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.productFactory) factory: IModelsFactory) {
        super(data);
        this._factory = factory;

    }
    public execute(parameters: string[]): string {
        const [name, brand, price, quantity] = parameters;

        if (isNaN(+price) || isNaN(+quantity)) {
            throw new Error('Failed to parse ReceiveFood command parameters.');
        }
        const food: IProduct = this._factory.receiveFood(name, brand, +price, +quantity);
        this._zooShopDatabase.products.push(food);

        return Validator.getFoodReceivedMessage(brand);
    }
}
