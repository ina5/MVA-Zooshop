import { inject } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { Role } from '../../models/enum/role';
import { ICommand } from './../../contratcs/commands/command';
import { IUserSession } from './../../contratcs/engine-contracts/providers/user-session';

export abstract class ClientCommand implements ICommand {

    protected _zooShopDatabase: IZooShopDatabase;
    private readonly _userSession: IUserSession;
    constructor(@inject(TYPES.zooShopDatabase) zooShopDatabase: IZooShopDatabase, @inject(TYPES.userSession) userSession: IUserSession) {
        this._zooShopDatabase = zooShopDatabase;
        this._userSession = userSession;
    }
    public execute(parameters: string[]): string {
        if (this._userSession.currentUser.role !== Role.employee) {
            throw new Error(`Invalid command for current User's Role`);
        }

        return Validator.getSuccessMessage('Validation successfull!');
    }
}
