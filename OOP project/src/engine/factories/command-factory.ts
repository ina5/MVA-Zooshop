import { inject, injectable } from 'inversify';
import * as commands from '../../commands/receiving';
import { Constants } from '../../common/constants';
import { TYPES } from '../../common/TYPES';
import { ICommand } from '../../contratcs/commands/command';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ICommandFactory } from '../../contratcs/engine-contracts/factories/command-factory';
import { IPetsFactory } from '../../contratcs/engine-contracts/factories/pets-factory';

@injectable()
export class CommandFactory implements ICommandFactory {
  private readonly _data: IZooShopDatabase;
  private readonly _petsFactory: IPetsFactory;
  private readonly _commands: Map<string, new (data: IZooShopDatabase, factory: IPetsFactory) => ICommand>;

  public constructor(
    @inject(TYPES.zooShopDatabase) data: IZooShopDatabase,
    @inject(TYPES.petsFactory) petsFactory: IPetsFactory
  ) {
    this._data = data;
    this._petsFactory = petsFactory;

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

    const command: (new (data: IZooShopDatabase, factory: IPetsFactory) => ICommand) | undefined = this._commands.get(lowerCaseCommandName);
    if (!command) {
      throw new Error(Constants.getInvalidCommandErrorMessage(commandName));
    }

    return new command(this._data, this._petsFactory);
  }
}
