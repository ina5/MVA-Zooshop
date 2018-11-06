import { IFurniture } from './furniture';

export interface ITable extends IFurniture {
  length: number;
  width: number;
  area: number;
}
