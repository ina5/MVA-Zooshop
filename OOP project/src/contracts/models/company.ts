import { IFurniture } from './furnitures/furniture';

export interface ICompany {
  name: string;
  registrationNumber: string;
  furnitures: IFurniture[];
  add(furniture: IFurniture): void;
  remove(furniture: IFurniture): void;
  find(model: string): IFurniture;
  catalog(): string;
}
