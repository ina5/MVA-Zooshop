import { IPet, IProduct } from '..';
export interface IZooShopDatabase {
    pets: Map<string, IPet[]>;
    products: IProduct[];

    addPet(key: string, pet: IPet): void;
}
