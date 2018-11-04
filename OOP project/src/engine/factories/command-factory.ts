import { PetsFactory } from '.';
import { ICommand } from '../../contratcs/commands/command';
import { IPetsDatabase } from '../../contratcs/data-contract/shop-database';
import { ICommandFactory, IPetsFactory } from '../../contratcs/engine-contracts';
import { PetsDatabase } from '../../data/shop-database';

export class CommandFactory implements ICommandFactory {
  private readonly _data: IPetsDatabase;
  private readonly _petsFactory: IPetsFactory;
  private readonly _commands: Map<string, new (data: IPetsDatabase, factory: IPetsFactory) => ICommand>;

  public constructor() {
    this._data = PetsDatabase.INSTANCE;
    this._petsFactory = new PetsFactory();

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

    const command: new (data: IPetsDatabase, factory: IPetsFactory) => ICommand = this._commands.get(lowerCaseCommandName);
    if (!command) {
      throw new Error(Constants.getInvalidCommandErrorMessage(commandName));
    }

    return new command(this._data, this._petsFactory);
  }
}
