import { injectable } from 'inversify';
import { IPetsFactory } from '../../contratcs/engine-contracts';
import { Cat, ClownFish, DifficultyDegree, Dog, FurType, Parrot, Sex, Snake, WaterType } from '../../models';
import { FoodType } from '../../models/enum/food-type';
import { IBird, IFish, IMammal, IReptile } from './../../contratcs/pets-contracts/pets/index';
@injectable()
// tslint:disable all -next-line:max-line-length
export class PetsFactory implements IPetsFactory {

  public receiveDog(breed: string, price: number, foodType: FoodType, sex: Sex, furType: FurType, trainable: DifficultyDegree, social: boolean): IMammal {
    return new Dog(breed, price, foodType, sex, furType, trainable, social);
  }
  public receiveCat(breed: string, price: number, foodType: FoodType, sex: Sex, furType: FurType, trainable: DifficultyDegree, social: boolean): IMammal {
    return new Cat(breed, price, foodType, sex, furType, trainable, social);
  }
  public receiveSnake(breed: string, price: number, foodType: FoodType, sex: Sex, skinColor: string, isVenomous: boolean): IReptile {
    return new Snake(breed, price, foodType, sex, skinColor, isVenomous);
  }
  public receiveParrot(breed: string, price: number, foodType: FoodType, sex: Sex, canTalk: boolean, sing: boolean): IBird {
    return new Parrot(breed, price, foodType, sex, canTalk, sing);
  }
  public receiveFish(breed: string, price: number, foodType: FoodType, sex: Sex, color: string, waterType: WaterType): IFish {
    return new ClownFish(breed, price, foodType, sex, color, waterType);
  }
}
