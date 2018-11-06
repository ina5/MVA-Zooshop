import { inject, injectable } from 'inversify';
import { TYPES } from '../common/types';
import { IEngine, IReader, IWriter } from '../contracts';
import { ICommandProcessor } from './../contracts/engine/providers/command-processor';
@injectable()
export class Engine implements IEngine {
  // tslint:disable-next-line:max-line-length
  public constructor(
    @inject(TYPES.reader) private readonly _reader: IReader,
    @inject(TYPES.writer) private readonly _writer: IWriter,
    @inject(TYPES.commandProcessor) private readonly _commandProcessor: ICommandProcessor) {

    this._reader = _reader;
    this._writer = _writer;
    this._commandProcessor = _commandProcessor;
  }

  public async start(): Promise<void> {
    const commands: string[] = await this._reader.read();

    const commandResults: string[] = await commands.map((command: string) => {
      try {
        return this._commandProcessor.processCommand(command);
      } catch (error) {
        return error.message;
      }
    });

    await this._writer.write(commandResults.join('\n'));
  }
}
