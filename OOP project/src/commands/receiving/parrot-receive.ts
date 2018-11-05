import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { ICommand, IPet, IPetsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { Sex } from '../../models';
import { FoodType } from '../../models/enum/food-type';

@injectable()
class ReceiveDog implements ICommand {
    private _factory: IPetsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    constructor(
        @inject(TYPES.petsFactory) factory: IPetsFactory,
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
    this._factory = factory;
    this._zooShopDatabase = data;
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, canTalk, sing] = parameters;

        if (isNaN(+price) || (canTalk !== 'true' && canTalk !== 'false') || (sing !== 'true' && sing !== 'false')) {
            throw new Error('Failed to parse ReceiveDog command parameters.');
        }
        const foodTypeKey: keyof typeof FoodType = <keyof typeof FoodType>foodType;
        const food: FoodType = <FoodType>(FoodType[foodTypeKey]);

        const sexTypeKey: keyof typeof Sex = <keyof typeof Sex>sex;
        const gender: Sex = <Sex>(Sex[sexTypeKey]);

        const parrot: IPet = this._factory.receiveParrot(breed, +price, food, gender, Boolean(canTalk), Boolean(sing));

        this._zooShopDatabase.pets.push(parrot);

        return `Parrot with ID ${this._zooShopDatabase.pets.length - 1} was created.`;
    }
}
