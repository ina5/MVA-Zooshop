import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IModelsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { DifficultyDegree, FurType, Sex } from '../../models';
import { FoodType } from '../../models/enum/food-type';
import { EmployeeCommand } from '../abstract/employee-command';
import { IUserSession } from './../../contratcs/engine-contracts/providers/user-session';
import { IMammal } from './../../contratcs/pets-contracts/pets/mammal';

@injectable()
export class ReceiveDog extends EmployeeCommand implements ICommand {
    private _factory: IModelsFactory;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.userSession) user: IUserSession,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        super(data, user);
        this._factory = factory;

    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, furType, trainable, social] = parameters;
        super.execute(parameters);
        if (isNaN(+price) || (social !== 'true' && social !== 'false')) {
            throw new Error('Failed to parse ReceiveDog command parameters.');
        }
        const foodTypeKey: keyof typeof FoodType = <keyof typeof FoodType>foodType;
        const food: FoodType = <FoodType>(FoodType[foodTypeKey]);
        const sexTypeKey: keyof typeof Sex = <keyof typeof Sex>sex;
        const gender: Sex = <Sex>(Sex[sexTypeKey]);
        const furTypeKey: keyof typeof FurType = <keyof typeof FurType>furType;
        const fur: FurType = <FurType>(FurType[furTypeKey]);
        const difficultyDegreeKey: keyof typeof DifficultyDegree = <keyof typeof DifficultyDegree>trainable;
        const degree: DifficultyDegree = <DifficultyDegree>(DifficultyDegree[difficultyDegreeKey]);
        const isSocial: boolean = Boolean(social);

        const dog: IMammal = this._factory.receiveDog(breed, +price, food, gender, fur, degree, isSocial);

        this._zooShopDatabase.addPet('dog', dog);

        return Validator.getReceivedMessage('Dog', breed);
    }
}
