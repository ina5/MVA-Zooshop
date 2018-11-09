import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IModelsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IUserSession } from '../../contratcs/engine-contracts/providers/user-session';
import { Sex } from '../../models';
import { FoodType } from '../../models/enum/food-type';
import { EmployeeCommand } from '../abstract/employee-command';
import { IBird } from './../../contratcs/pets-contracts/pets/bird';

@injectable()
export class ReceiveParrot extends EmployeeCommand implements ICommand {
    private _factory: IModelsFactory;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.userSession) user: IUserSession,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        super(data, user);
        this._factory = factory;
    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, canTalk, sing] = parameters;
        super.execute(parameters);
        if (isNaN(+price) || (canTalk !== 'true' && canTalk !== 'false') || (sing !== 'true' && sing !== 'false')) {
            throw new Error('Failed to parse ReceiveDog command parameters.');
        }
        const foodTypeKey: keyof typeof FoodType = <keyof typeof FoodType>foodType;
        const food: FoodType = <FoodType>(FoodType[foodTypeKey]);

        const sexTypeKey: keyof typeof Sex = <keyof typeof Sex>sex;
        const gender: Sex = <Sex>(Sex[sexTypeKey]);

        const parrot: IBird = this._factory.receiveParrot(breed, +price, food, gender, Boolean(canTalk), Boolean(sing));

        this._zooShopDatabase.addPet('parrot', parrot);

        return Validator.getReceivedMessage('Parrot', breed);
    }
}
