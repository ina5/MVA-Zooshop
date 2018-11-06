import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { ICommandFactory, ICommandParser, ICommandProcessor} from '../../contratcs';
import { ICommand } from './../../contratcs/commands/command';
@injectable()

export class CommandProcessor implements ICommandProcessor {

    private _commandParser: ICommandParser;

    constructor(@inject(TYPES.commandParser) commandParser: ICommandParser) {
        this._commandParser = commandParser;
    }
    public processCommand(commandAsString: string): string {
        const command: ICommand = this._commandParser.parseCommand(commandAsString);
        const commandParameters: string[] = this._commandParser.parseParameters(commandAsString);

        return command.execute(commandParameters);
    }
}
