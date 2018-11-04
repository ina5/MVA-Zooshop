import { ICommandProcessor } from './providers/command-processor';

export interface IEngine extends ICommandProcessor {
  start(): Promise<void>;
}
