import { inject } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { Role } from '../../models';
import { ICommand } from './../../contratcs/commands/command';
export abstract class ClientCommand implements ICommand {
    protected _zooShopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) zooShopDatabase: IZooShopDatabase) {
        this._zooShopDatabase = zooShopDatabase;
    }
    public execute(parameters: string[]): string {
        if (this._zooShopDatabase.currentUser.role === Role.employee) {
            Validator.getErrorMessage(`Invalid command for current User's Role`);
        } else if (this._zooShopDatabase.currentUser.role === Role.empty) {
            Validator.getErrorMessage(`No user in the current session!`);
        }

        return Validator.getLogSuccessfulMessage('Validation successfull!');
    }
}
