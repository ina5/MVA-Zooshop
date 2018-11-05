import { ZooShopDatabase } from './../../contratcs/zooShop-database';
import { PetsFactory } from '.';
import { ICommand } from '../../contratcs/commands/command';
import { ICommandFactory, IPetsFactory } from '../../contratcs/engine-contracts';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';

export class CommandFactory implements ICommandFactory {
  private readonly _data: IZooShopDatabase;
  private readonly _petsFactory: IPetsFactory;
  private readonly _commands: Map<string, new (data: IZooShopDatabase, factory: IPetsFactory) => ICommand>;

  public constructor() {
    this._data = ZooShopDatabase.INSTANCE;
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

    const command: new (data: IZooShopDatabase, factory: IPetsFactory) => ICommand = this._commands.get(lowerCaseCommandName);
    if (!command) {
      throw new Error(Constants.getInvalidCommandErrorMessage(commandName));
    }

    return new command(this._data, this._petsFactory);
  }
}
