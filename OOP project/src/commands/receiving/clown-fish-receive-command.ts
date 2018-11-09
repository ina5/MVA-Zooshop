import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IModelsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { Sex, WaterType } from '../../models';
import { FoodType } from '../../models/enum/food-type';
import { EmployeeCommand } from '../abstract/employee-command';
import { IUserSession } from './../../contratcs/engine-contracts/providers/user-session';
import { IFish } from './../../contratcs/pets-contracts/pets/fish';
@injectable()
export class ReceiveFish extends EmployeeCommand implements ICommand {
    private _factory: IModelsFactory;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.userSession) user: IUserSession,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        super(data, user);
        this._factory = factory;
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, color, waterType] = parameters;
        super.execute(parameters);
        if (isNaN(+price)) {
            throw new Error('Failed to parse ReceiveFish command parameters.');
        }
        const foodTypeKey: keyof typeof FoodType = <keyof typeof FoodType>foodType;
        const food: FoodType = <FoodType>(FoodType[foodTypeKey]);

        const sexTypeKey: keyof typeof Sex = <keyof typeof Sex>sex;
        const gender: Sex = <Sex>(Sex[sexTypeKey]);

        const waterTypeKey: keyof typeof WaterType = <keyof typeof WaterType>waterType;
        const water: WaterType = <WaterType>(WaterType[waterTypeKey]);

        const fish: IFish = this._factory.receiveFish(breed, +price, food, gender, color, water);

        this._zooShopDatabase.addPet('fish', fish);

        return Validator.getReceivedMessage('Fish', breed);
    }
}
