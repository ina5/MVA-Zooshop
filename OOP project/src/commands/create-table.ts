import { inject, injectable } from 'inversify';
import { Constants } from '../common/constants';
import { TYPES } from '../common/types';
import {
  ICommand,
  IFuritureDatabase,
  IFurniture,
  IModelsFactory,
  ITable
} from '../contracts';
import { MaterialType } from '../models';
@injectable()
export class CreateTable implements ICommand {
  public constructor(
    @inject(TYPES.furnituredatabase) private readonly _data: IFuritureDatabase,
    @inject(TYPES.modelsfactory) private readonly _factory: IModelsFactory) {
    this._data = _data;
    this._factory = _factory;
  }

  public execute(parameters: string[]): string {
    const [model, material, price, height, length, width] = parameters;

    const materialTypeKeyAsString: string = material.slice(0, 1).toUpperCase() + material.slice(1);
    const materialTypeKey: keyof typeof MaterialType = <keyof typeof MaterialType>materialTypeKeyAsString;
    const materialType: MaterialType = <MaterialType>(MaterialType[materialTypeKey]);

    const table: ITable = this._factory.createTable(model, materialType, +price, +height, +length, +width);
    this._data.furnitures.push(table);

    return Constants.getTableCreatedSuccessMessage(model);
  }
}
