import { readFile } from 'fs';
import { inject } from 'inversify';
import { join } from 'path';
import { IDataFormatter, IReader } from '../../contratcs/engine-contracts';
import { TYPES } from './../../common/TYPES';

export class FileReader implements IReader {
  private readonly _dataFormatter: IDataFormatter;

  public constructor(
    @inject(TYPES.dataFormatter) dataFormatter: IDataFormatter
  ) {
    this._dataFormatter = dataFormatter;
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
