import { IWriter } from '../../contratcs/engine-contracts';

export class ConsoleWriter implements IWriter {
  public write(output: string): void {
    console.log(output);
  }
}
