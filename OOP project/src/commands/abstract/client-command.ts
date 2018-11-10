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
        if (this._zooShopDatabase.currentUser.role === Role.employee) {
            throw new Error(`Invalid command for current User's Role`);
        }
    }
    public execute(parameters: string[]): string {
        if (this._zooShopDatabase.currentUser.role === Role.employee) {
            throw new Error(`Invalid command for current User's Role`);
        }

        return Validator.getSuccessfulMessage('Validation successfull!');
    }
}
