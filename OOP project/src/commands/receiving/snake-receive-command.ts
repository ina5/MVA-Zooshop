import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Constants } from '../../common/constants';
import { ICommand, IPet, IPetsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { Sex } from '../../models';
import { FoodType } from '../../models/enum/food-type';

@injectable()
class ReceiveSnake implements ICommand {
    private _factory: IPetsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    constructor(
        @inject(TYPES.petsFactory) factory: IPetsFactory,
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._factory = factory;
        this._zooShopDatabase = data;
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, skinColor, isVenomous] = parameters;
        if (isNaN(+price) || (isVenomous !== 'true' && isVenomous !== 'false')) {
            throw new Error('Failed to parse ReceiveSnake command parameters.');
        }
        const foodTypeKey: keyof typeof FoodType = <keyof typeof FoodType>foodType;
        const food: FoodType = <FoodType>(FoodType[foodTypeKey]);

        const sexTypeKey: keyof typeof Sex = <keyof typeof Sex>sex;
        const gender: Sex = <Sex>(Sex[sexTypeKey]);
        const snake: IPet = this._factory.receiveSnake(breed, +price, food, gender, skinColor, Boolean(isVenomous));

        this._zooShopDatabase.pets.push(snake);

        return Constants.getSnakeReceivedSuccessMessage(breed);
    }
}
