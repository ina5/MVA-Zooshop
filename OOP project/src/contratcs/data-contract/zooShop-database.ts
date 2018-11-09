import { IPet, IProduct, IUser } from '../index';

export interface IZooShopDatabase {
    pets: Map<string, IPet[]>;
    products: IProduct[];
    shoppingCart: (IPet | IProduct)[];

    users: IUser[];

    addPet(key: string, pet: IPet): void;
}
