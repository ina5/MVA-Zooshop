import { DifficultyDegree, FurType, Sex, WaterType } from '../../../models';
import { IBird, IFish, IMammal, IReptile } from '../../pets-contracts';

// tslint:disable all -next-line:max-line-length
export interface IPetsFactory {
  receiveDog(breed: string, price: number, foodType: string, sex: Sex, furType: FurType, social: boolean, trainable: DifficultyDegree): IMammal;

  receiveCat(breed: string, price: number, foodType: string, sex: Sex, furType: FurType, trainable: DifficultyDegree, social: boolean): IMammal;

  receiveSnake(breed: string, price: number, foodType: string, sex: Sex, skinColor: string, isVenomous: boolean): IReptile;

  receiveParrot(breed: string, price: number, foodType: string, sex: Sex, canTalk: boolean, sing: boolean): IBird;
  receiveFish(breed: string, price: number, foodType: string, sex: Sex, color: string, waterType: WaterType): IFish;
}
