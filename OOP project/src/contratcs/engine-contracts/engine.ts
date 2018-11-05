import { ICommandProcessor } from './providers/command-processor';

export interface IEngine {
  start(): Promise<void>;
}
