import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IModelsFactory } from '../../contratcs/engine-contracts/factories/models-factory';
import { IDataSeeder } from './../../contratcs/engine-contracts/providers/data-seeder';
import { IUser } from './../../contratcs/user-contract/user';
import { Role } from './../../models/enum/role';
@injectable()
export class DataSeeder implements IDataSeeder {
    private readonly _data: IZooShopDatabase;
    private readonly _factory: IModelsFactory;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        this._data = data;
        this._factory = factory;
    }
    public seedData(): void {
        const employee: IUser = this._factory.registerUser('Owner', Role.employee);
        if (this._data.currentUser === undefined) {
            this._data.currentUser = this._factory.registerUser('', Role.empty);
            this._data.users.push(employee);
        }
    }
}
