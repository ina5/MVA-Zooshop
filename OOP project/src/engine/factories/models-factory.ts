import { injectable } from 'inversify';
import { IChair, ICompany, IModelsFactory, ITable } from '../../contracts';
import { Chair, MaterialType, Table } from '../../models';
@injectable()
export class ModelsFactory implements IModelsFactory {
  public createTable(model: string, materialType: MaterialType, price: number, height: number, length: number, width: number): ITable {
    return new Table(model, materialType, price, height, length, width);
  }

  public createChair(model: string, materialType: MaterialType, price: number, height: number, numberOfLegs: number): IChair {
    return new Chair(model, materialType, price, height, numberOfLegs);
  }

}
