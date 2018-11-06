import { inject, injectable } from 'inversify';
import { TYPES } from '../common';
import { ICommand } from '../contratcs/commands/command';
import { ICommandFactory, IEngine, IReader, IWriter } from '../contratcs/engine-contracts';
import { ICommandProcessor } from './../contratcs/engine-contracts/providers/command-processor';

@injectable()
export class Engine implements IEngine {
  private readonly _reader: IReader;
  private readonly _writer: IWriter;
  private readonly _commandProcessor: ICommandProcessor;

  public constructor(
    @inject(TYPES.reader) _reader: IReader,
    @inject(TYPES.writer) _writer: IWriter,
    @inject(TYPES.commandProcessor) _commandProcessor: ICommandProcessor
  ) {
    this._reader = _reader;
    this._writer = _writer;
    this._commandProcessor = _commandProcessor;
  }

  public async start(): Promise<void> {
    const commands: string[] = await this._reader.read();

    const commandResults: string[] = commands.map((command: string) => {
      try {
        return this._commandProcessor.processCommand(command);
      } catch (error) {
        return error.message;
      }
    });

    this._writer.write(commandResults.join('\n'));
  }
}
