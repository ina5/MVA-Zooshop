import { Container } from 'inversify';
import { IDataFormatter, IPetsFactory, IReader } from '../contratcs';
import { IZooShopDatabase } from './../contratcs/data-contract/zooShop-database';
import { ICommandProcessor } from './../contratcs/engine-contracts/providers/command-processor';
import { IWriter } from './../contratcs/engine-contracts/providers/writer';
import { ZooShopDatabase } from './../data/zooShop-database';
import { PetsFactory } from './../engine/factories/pets-factory';
import { CommandProcessor } from './../engine/providers/command-processor';
import { ConsoleWriter } from './../engine/providers/console-writer';
import { DataFormatter } from './../engine/providers/data-formatter';
import { FileReader } from './../engine/providers/file-reader';
import { TYPES } from './TYPES';

const container: Container = new Container();

container.bind<IZooShopDatabase>(TYPES.zooShopDatabase).to(ZooShopDatabase).inSingletonScope();
container.bind<IReader>(TYPES.reader).to(FileReader);
container.bind<IWriter>(TYPES.writer).to(ConsoleWriter);
container.bind<IPetsFactory>(TYPES.petsFactory).to(PetsFactory);
container.bind<IDataFormatter>(TYPES.dataFormatter).to(DataFormatter);
container.bind<ICommandProcessor>(TYPES.commandProcessor).to(CommandProcessor);

export { container };
