import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { ICommand, IPet, IPetsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { Sex, WaterType } from '../../models';
import { FoodType } from './../../models/enum/food-type';
@injectable()
class ReceiveFish implements ICommand {
    private _factory: IPetsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    constructor(
        @inject(TYPES.petsFactory) factory: IPetsFactory,
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._factory = factory;
        this._zooShopDatabase = data;
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, color, waterType] = parameters;

        if (isNaN(+price)) {
            throw new Error('Failed to parse ReceiveFish command parameters.');
        }
        const foodTypeKey: keyof typeof FoodType = <keyof typeof FoodType>foodType;
        const food: FoodType = <FoodType>(FoodType[foodTypeKey]);

        const sexTypeKey: keyof typeof Sex = <keyof typeof Sex>sex;
        const gender: Sex = <Sex>(Sex[sexTypeKey]);

        const waterTypeKey: keyof typeof WaterType = <keyof typeof WaterType>waterType;
        const water: WaterType = <WaterType>(WaterType[waterTypeKey]);

        const fish: IPet = this._factory.receiveFish(breed, +price, food, gender, color, water);

        this._zooShopDatabase.pets.push(fish);

        return `Fish with ID ${this._zooShopDatabase.pets.length - 1} was created.`;
    }
}