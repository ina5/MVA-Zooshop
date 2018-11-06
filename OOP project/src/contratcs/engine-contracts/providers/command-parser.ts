import { ICommand } from '../../commands/command';

export interface ICommandParser {
    parseCommand(line: string): ICommand;

    parseParameters(line: string): string[];
}
