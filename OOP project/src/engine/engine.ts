import { inject, injectable } from 'inversify';
import { TYPES } from '../common';
import { IEngine, IReader, IWriter } from '../contratcs/engine-contracts';
import { IDataSeeder } from '../contratcs/engine-contracts/providers/data-seeder';
import { ICommandProcessor } from './../contratcs/engine-contracts/providers/command-processor';

@injectable()
export class Engine implements IEngine {
  private readonly _reader: IReader;
  private readonly _writer: IWriter;
  private readonly _commandProcessor: ICommandProcessor;
  private readonly _dataSeeder: IDataSeeder;

  public constructor(
    @inject(TYPES.reader) _reader: IReader,
    @inject(TYPES.writer) _writer: IWriter,
    @inject(TYPES.commandProcessor) _commandProcessor: ICommandProcessor,
    @inject(TYPES.dataSeeder) dataSeeder: IDataSeeder) {
    this._reader = _reader;
    this._writer = _writer;
    this._commandProcessor = _commandProcessor;
    this._dataSeeder = dataSeeder;
  }

  public async start(): Promise<void> {
    this._dataSeeder.seedData();
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
