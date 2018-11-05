import { injectable } from 'inversify';
import { IProduct } from './products-contract/products';
import { IZooShopDatabase } from "./data-contract/zooShop-database";
import { IPet } from './pets-contracts';

@injectable()
export class ZooShopDatabase implements IZooShopDatabase {

    private readonly _pets: IPet[];

    private readonly _products: IProduct[];

    public constructor() {
        this._pets = [];
        this._products = [];
    }

    public get pets(): IPet[] {
        return this._pets;
    }

    public get products(): IProduct[] {
        return this._products;
    }
}
