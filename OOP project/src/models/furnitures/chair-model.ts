import { IChair, IFurniture } from '../../contracts';
import { MaterialType } from '../common/material-type';
import { Furniture } from './furniture-model';

export class Chair extends Furniture implements IFurniture, IChair {
  private readonly _numberOfLegs: number;

  public constructor(model: string, materialType: MaterialType, price: number, height: number, numberOfLegs: number) {
    super(model, materialType, price, height);

    if (numberOfLegs < 0) {
      throw new Error('Legs number cannot be less than zero!');
    }

    this._numberOfLegs = numberOfLegs;
  }

  public get numberOfLegs(): number {
    return this._numberOfLegs;
  }

  protected additionalInfo(): string {
    return `Legs: ${this.numberOfLegs}`;
  }
}
