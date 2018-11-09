import { IPet, IProduct } from '..';
import { IUser } from '../user-contract';
export interface IZooShopDatabase {
    pets: Map<string, IPet[]>;
    products: IProduct[];
    users: IUser[];

    addPet(key: string, pet: IPet): void;
}
