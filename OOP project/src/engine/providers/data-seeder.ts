import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IModelsFactory } from '../../contratcs/engine-contracts/factories/models-factory';
import { IUserSession } from '../../contratcs/engine-contracts/providers/user-session';
import { User } from '../../models/user/user-model';
import { IDataSeeder } from './../../contratcs/engine-contracts/providers/data-seeder';
import { IUser } from './../../contratcs/user-contract/user';
import { Role } from './../../models/enum/role';
@injectable()
export class DataSeeder implements IDataSeeder {
    private readonly _data: IZooShopDatabase;
    private readonly _userSession: IUserSession;
    private readonly _factory: IModelsFactory;

    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.userSession) userSession: IUserSession,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        this._data = data;
        this._userSession = userSession;
        this._factory = factory;
    }
    public seedData(): void {
        const employee: IUser = new User('Owner', Role.employee);
        this._data.users.push(employee);
    }
}
