import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { IModelsFactory } from '../../contratcs';
import { ICommand } from '../../contratcs/commands';
import { IUserSession } from '../../contratcs/engine-contracts/providers/user-session';
import { Role } from '../../models';
import { Validator } from './../../common/validator';
@injectable()
export class LogOut implements ICommand {
    private readonly _userSession: IUserSession;
    private readonly _factory: IModelsFactory;
    constructor(
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
        this._factory = factory;
    }
    public execute(parameters: string[]): string {
        const [] = parameters;

        this._userSession.currentUser = this._factory.registerUser('', Role.empty);

        return Validator.getLogSuccessfulMessage('Log Out successfully');
    }
}
