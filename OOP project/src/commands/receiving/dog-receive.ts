import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { ICommand, IPet, IPetsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { DifficultyDegree, FurType, Sex } from '../../models';
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
        const [breed, price, foodType, sex, furType, trainable, social] = parameters;

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
        const dog: IPet = this._factory.receiveCat(breed, +price, food, gender, fur, degree, isSocial);

        this._zooShopDatabase.pets.push(dog);

        return `Dog with ID ${this._zooShopDatabase.pets.length - 1} was created.`;
    }
}
