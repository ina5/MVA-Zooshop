import { readFile } from 'fs';
import { join } from 'path';
import { IDataFormatter, IReader } from '../../contratcs/engine-contracts';
import { DataFormatter } from './data-formatter';

export class FileReader implements IReader {
  private readonly _dataFormatter: IDataFormatter;

  public constructor() {
    this._dataFormatter = new DataFormatter();
  }

  public async read(): Promise<string[]> {
    return new Promise((resolve: (res: string[]) => void, reject: (res: Error) => void): void => {
      readFile(join(__dirname, '../../commands.txt'), 'utf-8', (err: Error, data: string): void => {
        if (err) {
          reject(err);
        }
        resolve(this._dataFormatter.formatData(data));
      }
      );
    }
    );
  }
}
