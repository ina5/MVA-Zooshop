import { inject, injectable } from 'inversify';
import * as commands from '../../commands';
import { TYPES } from '../../common/types';
import { Validator } from '../../common/validator';
import { ICommand } from '../../contratcs/commands/command';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ICommandFactory } from '../../contratcs/engine-contracts/factories/command-factory';
import { IModelsFactory } from '../../contratcs/engine-contracts/factories/models-factory';

@injectable()
export class CommandFactory implements ICommandFactory {
  private readonly _data: IZooShopDatabase;
  private readonly _modelsFactory: IModelsFactory;
  private readonly _commands: Map<string, new (data: IZooShopDatabase, factory: IModelsFactory) => ICommand>;

  public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase, @inject(TYPES.modelsFactory) modelsFactory: IModelsFactory) {
    this._data = data;
    this._modelsFactory = modelsFactory;
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

    const command: (new (data: IZooShopDatabase, factory: IModelsFactory)
      => ICommand) | undefined = this._commands.get(lowerCaseCommandName);
    if (!command) {
      throw new Error(Validator.getInvalidCommandErrorMessage(commandName));
    }

    return new command(this._data, this._modelsFactory);
  }
}
