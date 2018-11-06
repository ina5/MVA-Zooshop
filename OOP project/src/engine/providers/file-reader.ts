import { readFile } from 'fs';
import { inject, injectable } from 'inversify';
import { join } from 'path';
import { TYPES } from '../../common/types';
import { IDataFormatter, IReader } from '../../contracts/';
@injectable()
export class FileReader implements IReader {
  public constructor(@inject(TYPES.dataFormater) private readonly _dataFormatter: IDataFormatter) {
    this._dataFormatter = _dataFormatter ;
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
