import { injectable } from 'inversify';
import { ICommand, IPetsFactory, IPet } from '../../../contratcs';
import { IZooShopDatabase } from '../../../contratcs/data-contract/zooShop-database';
@injectable()
class ReceiveDog implements ICommand {
    private _factory: IPetsFactory
    private _zooShopDatabase: IZooShopDatabase;

    // WHEN CONTAINER IS DONE
    constructor() {
    } public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, canTalk, sing] = parameters;

        if (isNaN(+price) || (canTalk !== 'true' && canTalk !== 'false') || (sing !== 'true' && sing !== 'false')) {
            throw new Error('Failed to parse ReceiveDog command parameters.');
        }

        const parrot: IPet = this._factory.receiveParrot(breed, +price, foodType, sex, Boolean(canTalk), Boolean(sing));

        this._zooShopDatabase.pets.push(parrot);

        return `Parrot with ID ${this._zooShopDatabase.pets.length - 1} was created.`;
    }
}