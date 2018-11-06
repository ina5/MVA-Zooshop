import { IFurniture } from '../../contracts';
import { MaterialType } from './../common/material-type';

export abstract class Furniture implements IFurniture {
  private readonly _model: string;
  private readonly _materialType: MaterialType;
  private readonly _price: number;
  private readonly _height: number;

  public constructor(model: string, materialType: MaterialType, price: number, height: number) {
    if (model.length < 3) {
      throw new Error('Furniture model name length must be at least 3 characters long!');
    }
    if (!MaterialType[materialType]) {
      throw new Error('Invalid furniture material type!');
    }
    if (price < 0) {
      throw new Error('Price cannot be less than zero!');
    }
    if (height < 0) {
      throw new Error('Height cannot be less than zero!');
    }

    this._model = model;
    this._materialType = materialType;
    this._price = price;
    this._height = height;
  }

  public get model(): string {
    return this._model;
  }
  public get materialType(): MaterialType {
    return this._materialType;
  }

  public get price(): number {
    return this._price;
  }

  public get height(): number {
    return this._height;
  }

  public print(): string {
    return (
      `Type: ${this.constructor.name}, ` +
      `Model: ${this.model}, ` +
      `Material: ${MaterialType[this.materialType]}, ` +
      `Price: ${this.price.toFixed(2)}, ` +
      `Height: ${this.height.toFixed(2)}, ` +
      `${this.additionalInfo()}`
    );
  }

  protected abstract additionalInfo(): string;
}
