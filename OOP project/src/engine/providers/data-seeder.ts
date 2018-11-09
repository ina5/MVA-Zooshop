import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { IModelsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IUserSession } from '../../contratcs/engine-contracts/providers/user-session';
import { IUser } from '../../contratcs/user-contract';
import { Role } from '../../models/enum/role';
import { IDataSeeder } from './../../contratcs/engine-contracts/providers/data-seeder';
import { User } from './../../models/users/user-model';
@injectable()
export class DataSeeder implements IDataSeeder {
    private readonly _data: IZooShopDatabase;
    private readonly _userSession: IUserSession;
    private readonly _factory: IModelsFactory;

    // tslint:disable-next-line:max-line-length
    public constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.userSession) userSession: IUserSession,
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        this._data = data;
        this._userSession = userSession;
        this._factory = factory;
    }
    public seedData(): void {
        const employee: IUser = new User('Pesho', Role.employee);
        this._data.users.push(employee);
    }
}
