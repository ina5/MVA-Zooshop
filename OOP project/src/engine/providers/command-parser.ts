import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { ICommand, ICommandFactory, ICommandParser } from '../../contratcs';

@injectable()
export class CommandParser implements ICommandParser {

    private _commandFactory: ICommandFactory;

    constructor(@inject(TYPES.commandFactory) commandFactory: ICommandFactory) {
        this._commandFactory = commandFactory;
    }

    public parseCommand(line: string): ICommand {
        const commandName: string = line.trim().split(' ')[0];

        return this._commandFactory.getCommand(commandName);
    }

    public parseParameters(line: string): string[] {
        return line.split(' ').slice(1);
    }
}
