import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand, IModelsFactory } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IUserSession } from '../../contratcs/engine-contracts/providers/user-session';
import { IUser } from '../../contratcs/user-contract';
import { Role } from '../../models';

@injectable()
export class LogIn implements ICommand {
    private readonly _zooShopDatabase: IZooShopDatabase;
    private readonly _userSession: IUserSession;
    private readonly _factory: IModelsFactory;

    public constructor(
        @inject(TYPES.zooShopDatabase) zooShopDatabase: IZooShopDatabase,
        @inject(TYPES.userSession) userSession: IUserSession,
        @inject(TYPES.modelsFactory) modelsFactory: IModelsFactory) {

        this._zooShopDatabase = zooShopDatabase;
        this._userSession = userSession;
        this._factory = modelsFactory;

    }
    public execute(parameters: string[]): string {
        const [name] = parameters;
        if (name === undefined) {
            throw new Error('Invalid parameters!');
        }
        const findUserIndex: number = this._zooShopDatabase.users.findIndex((obj: IUser) => obj.name === name);
        // Тук сесията е празнаа и факторито е празно
        console.log(name);
        if (this._userSession.currentUser === undefined) {
            const user: IUser = this._factory.registerUser(name, Role.client);
            this._zooShopDatabase.users.push(user);
            this._userSession.currentUser = user;

            return Validator.getErrorMessage('There is already alloged user. LogOut first!');

        } else if (findUserIndex < -1) {
            const user: IUser = this._factory.registerUser(name, Role.client);
            this._zooShopDatabase.users.push(user);
            this._userSession.currentUser = user;
        } else {
            this._userSession.currentUser = this._zooShopDatabase.users[findUserIndex];
        }

        return Validator.getSuccessMessage('Log In successfully!');

    }
}
