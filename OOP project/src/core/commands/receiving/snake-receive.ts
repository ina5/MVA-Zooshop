import { FoodType } from './../../../models/enum/food-type';
import { inject, injectable } from 'inversify';
import { IPet } from './../../../contratcs/pets-contracts/pets/pet';
import { IPetsFactory } from './../../../contratcs/engine-contracts/factories/pets-factory';
import { ICommand } from './../../../contratcs/commands/command';
import { IZooShopDatabase } from '../../../contratcs/data-contract/zooShop-database';
import { FoodType } from '../../../models/enum/food-type';
@injectable()
class ReceiveSnake implements ICommand {
    private _factory: IPetsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    // WHEN CONTAINER IS DONE
    constructor() {
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, skinColor, isVenomous] = parameters;
        if (isNaN(+price) || (isVenomous !== 'true' && isVenomous !== 'false')) {
            throw new Error('Failed to parse ReceiveSnake command parameters.');
        }

        const snake: IPet = this._factory.receiveSnake(breed, +price, foodType, sex, skinColor, Boolean(isVenomous));

        this._zooShopDatabase.pets.push(snake);

        return `Snake with ID ${this._zooShopDatabase.pets.length - 1} was created.`;
    }
}