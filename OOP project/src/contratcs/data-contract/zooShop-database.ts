import { IPet, IProduct } from '..';
export interface IZooShopDatabase {
    pets: Map<string, IPet[]>;
    products: IProduct[];
    shoppingCart: (IPet | IProduct)[];

    addPet(key: string, pet: IPet): void;
}
