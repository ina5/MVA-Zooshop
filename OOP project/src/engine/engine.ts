import { ICommand } from '../contratcs/commands/command';
import { ICommandFactory, IEngine, IReader, IWriter } from '../contratcs/engine-contracts';
import { CommandFactory } from './factories';
import { ConsoleWriter, FileReader } from './providers';

export class Engine implements IEngine {
  private readonly _reader: IReader;
  private readonly _writer: IWriter;
  private readonly _commandFactory: ICommandFactory;

  public constructor() {
    this._reader = new FileReader();
    this._writer = new ConsoleWriter();
    this._commandFactory = new CommandFactory();
  }

  public async start(): Promise<void> {
    const commands: string[] = await this._reader.read();

    const commandResults: string[] = commands.map((command: string) => {
      try {
        return this.processCommand(command);
      } catch (error) {
        return error.message;
      }
    });

    this._writer.write(commandResults.join('\n'));
  }

  public processCommand(commandAsString: string): string {
    const command: ICommand = this.parseCommand(commandAsString);
    const commandParameters: string[] = this.parseParameters(commandAsString);

    return command.execute(commandParameters);
  }

  private parseCommand(commandAsString: string): ICommand {
    const commandName: string = commandAsString.trim().split(' ')[0];

    return this._commandFactory.getCommand(commandName);
  }

  private parseParameters(commandAsString: string): string[] {
    return commandAsString.split(' ').slice(1);
  }
}
