import { IFurniture, ITable } from '../../contracts';
import { MaterialType } from './../common/material-type';
import { Furniture } from './furniture-model';

export class Table extends Furniture implements IFurniture, ITable {
  private readonly _length: number;
  private readonly _width: number;

  public constructor(model: string, materialType: MaterialType, price: number, height: number, length: number, width: number) {
    super(model, materialType, price, height);

    if (length < 0) {
      throw new Error('Length cannot be less than zero!');
    }
    if (width < 0) {
      throw new Error('Width cannot be less than zero!');
    }

    this._length = length;
    this._width = width;
  }

  public get width(): number {
    return this._width;
  }

  public get length(): number {
    return this._length;
  }

  public get area(): number {
    return this.width * this.length;
  }

  protected additionalInfo(): string {
    return `Length: ${this.length}, Width: ${this.width}, Area: ${this.area.toFixed(2)}`;
  }
}
