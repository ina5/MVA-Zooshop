import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { Validator } from '../../common/validator';
import { ICommand } from '../../contratcs';
import { IZooShopDatabase } from '../../contratcs/data-contract';
import { Role } from '../../models';
@injectable()
export abstract class EmployeeCommand implements ICommand {
    protected _zooShopDatabase: IZooShopDatabase;
    constructor(@inject(TYPES.zooShopDatabase) zooShopDatabase: IZooShopDatabase) {
        this._zooShopDatabase = zooShopDatabase;
    }
    public execute(parameters: string[]): string {
        if (this._zooShopDatabase.currentUser.role === Role.client) {
            Validator.getErrorMessage(`Invalid command for current User's Role`);
        } else if (this._zooShopDatabase.currentUser.role === Role.empty) {
            Validator.getErrorMessage(`No user in the current session!`);
        }

        return Validator.getLogSuccessfulMessage('Validation successfull!');
    }
}
