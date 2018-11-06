import { inject, injectable } from 'inversify';
import { Constants } from '../common/constants';
import { TYPES } from '../common/types';
import {
  IChair,
  ICommand,
  IFuritureDatabase,
  IFurniture,
  IModelsFactory
} from '../contracts';
import { MaterialType } from '../models';
@injectable()
export class CreateChair implements ICommand {

  public constructor(
    @inject(TYPES.furnituredatabase) private readonly _data: IFuritureDatabase,
    @inject(TYPES.modelsfactory) private readonly _factory: IModelsFactory) {
    this._data = _data;
    this._factory = _factory;
  }

  public execute(parameters: string[]): string {
    const [model, material, price, height, legs] = parameters;

    const materialTypeKeyAsString: string = material.slice(0, 1).toUpperCase() + material.slice(1);
    const materialTypeKey: keyof typeof MaterialType = <keyof typeof MaterialType>materialTypeKeyAsString;
    const materialType: MaterialType = <MaterialType>(MaterialType[materialTypeKey]);

    const chair: IChair = this._factory.createChair(model, materialType, +price, +height, +legs);
    this._data.furnitures.push(chair);

    return Constants.getChairCreatedSuccessMessage(model);
  }
}
