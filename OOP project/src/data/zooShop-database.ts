import { injectable } from 'inversify';
import { IZooShopDatabase } from '../contratcs/data-contract/zooShop-database';
import { IPet } from '../contratcs/pets-contracts';
import { IProduct } from '../contratcs/products-contract/products';
import { IUser } from './../contratcs/user-contract/user';

@injectable()
export class ZooShopDatabase implements IZooShopDatabase {

    private readonly _pets: Map<string, IPet[]>;

    private readonly _products: IProduct[];
    private readonly _shoppingCart: (IPet | IProduct)[];

    private readonly _users: IUser[];

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

    public get shoppingCart(): (IPet | IProduct)[] {
        return this._shoppingCart;
    }

    public get users(): IUser[] {
        return this._users;
    }

    public addPet(key: string, pet: IPet): void {
        if (!this._pets.has(key)) {
            this._pets.set(key, []);
            this.pushValues(key, pet);

        } else {
            this.pushValues(key, pet);
        }
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
