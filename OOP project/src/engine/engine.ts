import { inject, injectable } from 'inversify';
import { TYPES } from '../common';
import { IEngine, IReader, IWriter } from '../contratcs/engine-contracts';
import { ICommandProcessor } from './../contratcs/engine-contracts/providers/command-processor';
import { IDataSeeder } from './../contratcs/engine-contracts/providers/data-seeder';

@injectable()
export class Engine implements IEngine {
  private readonly _reader: IReader;
  private readonly _writer: IWriter;
  private readonly _commandProcessor: ICommandProcessor;
  private readonly _dataSeeder: IDataSeeder;

  public constructor(
    @inject(TYPES.reader) reader: IReader,
    @inject(TYPES.writer) writer: IWriter,
    @inject(TYPES.commandProcessor) commandProcessor: ICommandProcessor,
    @inject(TYPES.dataSeeder) dataSeeder: IDataSeeder
  ) {
    this._reader = reader;
    this._writer = writer;
    this._commandProcessor = commandProcessor;
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
