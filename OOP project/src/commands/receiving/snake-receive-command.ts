import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IModelsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { Sex } from '../../models';
import { FoodType } from '../../models/enum/food-type';
import { IReptile } from './../../contratcs/pets-contracts/pets/reptile';

@injectable()
export class ReceiveSnake implements ICommand {
    private _factory: IModelsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        this._zooShopDatabase = data;
        this._factory = factory;
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

        const snake: IReptile = this._factory.receiveSnake(breed, +price, food, gender, skinColor, Boolean(isVenomous));

        this._zooShopDatabase.addPet('snake', snake);

        return Validator.getReceived('Snake', breed);
    }
}
