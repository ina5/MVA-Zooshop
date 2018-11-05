import { injectable } from 'inversify';
import { ICommand, IPetsFactory, IPet } from '../../../contratcs';
import { IZooShopDatabase } from '../../../contratcs/data-contract/zooShop-database';
@injectable()
class ReceiveFish implements ICommand {
    private _factory: IPetsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    // WHEN CONTAINER IS DONE
    constructor() {
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, color, waterType] = parameters;

        if (isNaN(+price)) {
            throw new Error('Failed to parse ReceiveFish command parameters.');
        }

        const fish: IPet = this._factory.receiveFish(breed, +price, foodType, sex, color, waterType);

        this._zooShopDatabase.pets.push(fish);

        return `Fish with ID ${this._zooShopDatabase.pets.length - 1} was created.`;
    }
}