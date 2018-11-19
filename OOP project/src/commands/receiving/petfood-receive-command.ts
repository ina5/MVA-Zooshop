import { inject, injectable } from 'inversify';
import { TYPES, Validator } from '../../common';
import { ICommand, IModelsFactory, IProduct } from '../../contratcs';
import { EmployeeCommand } from '../abstract/employee-command';
import { IZooShopDatabase } from './../../contratcs/data-contract/zooShop-database';

@injectable()
export class ReceiveFood extends EmployeeCommand implements ICommand {
    private _factory: IModelsFactory;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        super(data);
        this._factory = factory;

    }
    public execute(parameters: string[]): string {
        const [name, brand, price, weight] = parameters;
        super.execute(parameters);
        if (isNaN(+price) || isNaN(+weight)) {
            throw new Error('Failed to parse ReceiveFood command parameters.');
        }
        const food: IProduct = this._factory.receiveFood(name, brand, +price, +weight);
        this._zooShopDatabase.products.push(food);

        return Validator.getFoodReceivedMessage(brand);
    }
}
