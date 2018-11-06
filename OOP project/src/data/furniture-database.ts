import { injectable } from 'inversify';
import { ICompany, IFuritureDatabase, IFurniture } from '../contracts';
@injectable()
export class FurnitureDatabase implements IFuritureDatabase {
  private readonly _furnitures: IFurniture[];

  public constructor() {
    this._furnitures = [];
  }
  public get furnitures(): IFurniture[] {
    return this._furnitures;
  }
}
