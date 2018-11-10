import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { Role } from '../../models/enum/role';
import { ICommand } from './../../contratcs/commands/command';
import { IZooShopDatabase } from './../../contratcs/data-contract/zooShop-database';
import { IModelsFactory } from './../../contratcs/engine-contracts/factories/models-factory';
import { IUser } from './../../contratcs/user-contract/user';

@injectable()
export class Login implements ICommand {
    private readonly _data: IZooShopDatabase;
    private readonly _factory: IModelsFactory;
    constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
        @inject(TYPES.modelsFactory) factory: IModelsFactory
    ) {
        this._data = data;
        this._factory = factory;

    }
    public execute(parameters: string[]): string {
        const [name] = parameters;
        if (this._data.currentUser.name === name || this._data.currentUser.role === Role.client) {
            return Validator.getErrorMessage('There is a user already log in. Please Log out first!');
        } else if (name === 'Owner') {
            const admin: IUser | undefined = this._data.users.find((el: IUser) => el.name === name);
            if (admin === undefined) {
                throw new Error('There is no Owner in the shop!');
            }
            this._data.currentUser = admin;

        } else {
            const client: IUser = this._factory.registerUser(name, Role.client);
            this._data.currentUser = client;
            if (this._data.users.findIndex((el: IUser) => el === client) === -1) {
                this._data.users.push(client);
            }
        }

        return Validator.getLogSuccessfulMessage('Log in successfully!');
    }
}
