import { DifficultyDegree, FurType, Sex, WaterType } from '../../../models';
import { FoodType } from '../../../models/enum/food-type';
import { Role } from '../../../models/enum/role';
import { IBird, IFish, IMammal, IReptile } from '../../pets-contracts';
import { IProduct } from '../../products-contract';
import { IUser } from './../../user-contract/user';

// tslint:disable all -next-line:max-line-length
export interface IModelsFactory {
  receiveDog(breed: string, price: number, foodType: FoodType, sex: Sex, furType: FurType, trainable: DifficultyDegree, social: boolean, ): IMammal;

  receiveCat(breed: string, price: number, foodType: FoodType, sex: Sex, furType: FurType, trainable: DifficultyDegree, social: boolean): IMammal;

  receiveSnake(breed: string, price: number, foodType: FoodType, sex: Sex, skinColor: string, isVenomous: boolean): IReptile;

  receiveParrot(breed: string, price: number, foodType: FoodType, sex: Sex, canTalk: boolean, sing: boolean): IBird;
  receiveFish(breed: string, price: number, foodType: FoodType, sex: Sex, color: string, waterType: WaterType): IFish;

  receiveFood(name: string, brand: string, price: number, weight: number): IProduct;
  registerUser(name: string, role: Role): IUser
}
