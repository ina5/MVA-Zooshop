import { inject } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IUserSession } from '../../contratcs/engine-contracts/providers/user-session';
import { Role } from '../../models/enum/role';

export abstract class EmployeeCommand implements ICommand {
    protected _zooShopDatabase: IZooShopDatabase;
    private readonly _userSession: IUserSession;
    constructor(@inject(TYPES.zooShopDatabase) zooShopDatabase: IZooShopDatabase, @inject(TYPES.userSession) userSession: IUserSession) {
        this._zooShopDatabase = zooShopDatabase;
        this._userSession = userSession;
    }
    public execute(parameters: string[]): string {
        if (this._userSession.currentUser.role !== Role.client) {
            throw new Error(`Invalid command for current User's Role`);
        }

        return Validator.getSuccessMessage('Validation successfull!');
    }

}
