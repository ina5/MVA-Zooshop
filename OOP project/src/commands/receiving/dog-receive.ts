import { injectable } from 'inversify';
import { ICommand, IPetsFactory, IPet } from '../../../contratcs';
import { IZooShopDatabase } from '../../../contratcs/data-contract/zooShop-database';
@injectable()
class ReceiveDog implements ICommand {
    private _factory: IPetsFactory
    private _zooShopDatabase: IZooShopDatabase;

    // WHEN CONTAINER IS DONE
    constructor() {
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, furType, trainable, social] = parameters;

        if (isNaN(+price) || (social !== 'true' && social !== 'false')) {
            throw new Error('Failed to parse ReceiveDog command parameters.');
        }

        const dog: IPet = this._factory.receiveCat(breed, +price, foodType, sex, furType, trainable, social);

        this._zooShopDatabase.pets.push(dog);

        return `Dog with ID ${this._zooShopDatabase.pets.length - 1} was created.`;
    }
}