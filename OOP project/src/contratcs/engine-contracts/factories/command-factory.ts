import { ICommand } from '../../commands/command';

export interface ICommandFactory {
    getCommand(commandName: string): ICommand;
}
