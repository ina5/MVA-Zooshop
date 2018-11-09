import { injectable } from 'inversify';
import { IProduct } from '../../contratcs';
import { IModelsFactory } from '../../contratcs/engine-contracts';
import { IBird, IFish, IMammal, IReptile } from '../../contratcs/pets-contracts/pets/index';
import { IUser } from '../../contratcs/user-contract';
import { Cat, ClownFish, DifficultyDegree, Dog, FurType, Parrot, Sex, Snake, User, WaterType } from '../../models';
import { FoodType } from '../../models/enum/food-type';
import { Role } from '../../models/enum/role';
import { PetFood } from '../../models/products/petfood-model';
@injectable()
// tslint:disable all -next-line:max-line-length
export class ModelsFactory implements IModelsFactory {

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
  // Product factories
  public receiveFood(name: string, brand: string, price: number, quantity: number): IProduct {
    return new PetFood(name, brand, price, quantity);
  }
  public registerUser(name: string, role: Role): IUser {
    return new User(name, role);
  }
  public constructor() { }
}
