import { IItem, IPet, IProduct, IUser } from '../index';

export interface IZooShopDatabase {
    pets: Map<string, IPet[]>;
    products: IProduct[];
    shoppingCart: IItem[];

    users: IUser[];
    currentUser: IUser;

    addPet(key: string, pet: IPet): void;
}
