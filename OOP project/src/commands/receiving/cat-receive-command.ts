import { inject, injectable } from 'inversify';
import { Constants } from '../../common/constants';
import { TYPES } from '../../common/TYPES';
import { ICommand, IPet, IPetsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { DifficultyDegree, FurType, Sex } from '../../models';
import { FoodType } from '../../models/enum/food-type';
import { IMammal } from './../../contratcs/pets-contracts/pets/mammal';

@injectable()
export class ReceiveCat implements ICommand {
    private _factory: IPetsFactory;
    private _zooShopDatabase: IZooShopDatabase;

    constructor(
        @inject(TYPES.petsFactory) factory: IPetsFactory,
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._zooShopDatabase = data;
        this._factory = factory;

    }
    public execute(parameters: string[]): string {
        const [breed, price, foodType, sex, furType, trainable, social] = parameters;

        if (isNaN(+price) || (social !== 'true' && social !== 'false')) {
            throw new Error('Failed to parse ReceiveCat command parameters.');
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

        const cat: IMammal = this._factory.receiveCat(breed, +price, food, gender, fur, degree, isSocial);
        this._zooShopDatabase.pets.push(cat);

        return Constants.getCatReceivedSuccessMessage(breed);
    }
}
