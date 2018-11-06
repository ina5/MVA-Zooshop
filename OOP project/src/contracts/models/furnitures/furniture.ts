import { MaterialType } from '../../../models';
import { IPrintable } from '../printable';

export interface IFurniture extends IPrintable {
  model: string;
  materialType: MaterialType;
  price: number;
  height: number;
}
