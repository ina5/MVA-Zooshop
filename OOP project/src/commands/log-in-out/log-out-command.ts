import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { Role } from '../../models/enum/role';
import { ICommand } from './../../contratcs/commands/command';
import { IZooShopDatabase } from './../../contratcs/data-contract/zooShop-database';
import { IModelsFactory } from './../../contratcs/engine-contracts/factories/models-factory';

@injectable()
export class Logout implements ICommand {
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
        if (this._data.currentUser.role === Role.empty) {
            return Validator.getLogErrorMessage('No user in the current session!');
        }
        this._data.currentUser = this._factory.registerUser('', Role.empty);

        return Validator.getLogSuccessfulMessage('Log out successfully!');
    }
}
