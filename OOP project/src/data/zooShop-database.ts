import { injectable } from 'inversify';
import { IZooShopDatabase } from '../contratcs/data-contract/zooShop-database';
import { IProduct } from '../contratcs/products-contract/products';
import { IItem } from './../contratcs/item-contract/item';
import { IPet } from './../contratcs/pets-contracts/pets/pet';
import { IUser } from './../contratcs/user-contract/user';

@injectable()
export class ZooShopDatabase implements IZooShopDatabase {

    private readonly _pets: Map<string, IPet[]>;

    private readonly _products: IProduct[];
    private _shoppingCart: IItem[];

    private readonly _users: IUser[];
    private _currentUser: IUser;

    public constructor() {
        this._pets = new Map();
        this._products = [];
        this._shoppingCart = [];
        this._users = [];
    }

    public get pets(): Map<string, IPet[]> {
        return this._pets;
    }

    public get products(): IProduct[] {
        return this._products;
    }

    public get shoppingCart(): IItem[] {
        return this._shoppingCart;
    }

    public set shoppingCart(items: IItem[]) {
        this._shoppingCart = items;
    }

    public get users(): IUser[] {
        return this._users;
    }

    public get currentUser(): IUser {
        return this._currentUser;
    }

    public set currentUser(newUser: IUser) {
        this._currentUser = newUser;
    }
    public addPet(key: string, pet: IPet): string {
        if (key === '') {
            throw new Error('Key can not be empty string!');

        } else if (key === undefined) {
            throw new Error();
        } else if (!this._pets.has(key)) {
            this._pets.set(key, []);
            this.pushValues(key, pet);

        } else {
            this.pushValues(key, pet);
        }

        return 'Success';
    }
    private pushValues(key: string, pet: IPet): void {
        const values: IPet[] | undefined = this.pets.get(key);
        if (values === undefined) {
            throw new Error('Invalid values!');
        } else {
            values.push(pet);
        }
    }
}
