import { Container, interfaces } from 'inversify';
// tslint:disable-next-line:max-line-length
import { IDataFormatter, IEngine, IFuritureDatabase, IModelsFactory, IReader, IWriter } from '../contracts';
import { ModelsFactory } from '../engine';
import { ConsoleWriter } from '../engine/providers/console-writer';
import { ICommandFactory } from './../contracts/engine/factories/command-factory';
import { ICommandProcessor } from './../contracts/engine/providers/command-processor';
import { FurnitureDatabase } from './../data/furniture-database';
import { Engine } from './../engine/engine';
import { CommandFactory } from './../engine/factories/command-factory';
import { CommandProcessor } from './../engine/providers/command-parser';
import { DataFormatter } from './../engine/providers/data-formatter';
import { FileReader } from './../engine/providers/file-reader';
import { TYPES } from './types';

const container: Container = new Container();

// The binding so the container command factory can work - dont touch :)

container.bind<IReader>(TYPES.reader).to(FileReader);
container.bind<IWriter>(TYPES.writer).to(ConsoleWriter);
container.bind<IDataFormatter>(TYPES.dataFormater).to(DataFormatter);
container.bind<IEngine>(Engine).to(Engine);
container.bind<ICommandFactory>(TYPES.commandFactory).to(CommandFactory);
container.bind<IFuritureDatabase>(TYPES.furnituredatabase).to(FurnitureDatabase).inSingletonScope();
container.bind<IModelsFactory>(TYPES.modelsfactory).to(ModelsFactory);
container.bind<ICommandProcessor>(TYPES.commandProcessor).to(CommandProcessor);

export {
  container
};
