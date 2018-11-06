import { inject, injectable } from 'inversify';
import * as commands from '../../commands';
import { TYPES } from '../../common/types';
import {
  ICommand,
  ICommandFactory,
  IFuritureDatabase,
  IModelsFactory
} from '../../contracts';
@injectable()
export class CommandFactory implements ICommandFactory {
  private readonly _commands: Map<string, new (data: IFuritureDatabase, factory: IModelsFactory) => ICommand>;

  public constructor(
    @inject(TYPES.furnituredatabase) private readonly _data: IFuritureDatabase,
    @inject(TYPES.modelsfactory) private readonly _modelsFactory: IModelsFactory) {
    this._data = _data;
    this._modelsFactory = _modelsFactory;

    this._commands = Object
      .keys(commands)
      .reduce((allCommands: Map<string, new () => ICommand>, commandName: string): Map<string, new () => ICommand> => {
        // tslint:disable:no-any
        allCommands.set(commandName.toLowerCase(), (<any>commands)[commandName]);

        return allCommands;
      },
        new Map()
      );
  }

  public getCommand(commandName: string): ICommand {
    const lowerCaseCommandName: string = commandName.toLowerCase();

    const command: new(data: IFuritureDatabase, factory: IModelsFactory) => ICommand = this._commands.get(lowerCaseCommandName);
    if (!command) {
      throw new Error('peeeras');
    }

    return new command(this._data, this._modelsFactory);
  }
}
