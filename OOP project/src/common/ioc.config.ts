import { Container } from 'inversify';
import { IDataFormatter, IPetsFactory, IReader } from '../contratcs';
import { IZooShopDatabase } from './../contratcs/data-contract/zooShop-database';
import { IWriter } from './../contratcs/engine-contracts/providers/writer';
import { PetsFactory } from './../engine/factories/pets-factory';
import { ConsoleWriter } from './../engine/providers/console-writer';
import { DataFormatter } from './../engine/providers/data-formatter';
import { FileReader } from './../engine/providers/file-reader';
import { Zooshop } from './../models/zooshop-model';
import { TYPES } from './TYPES';

const container: Container = new Container();

container.bind<IZooShopDatabase>(TYPES.zooShopDatabase).to(Zooshop).inSingletonScope();
container.bind<IReader>(TYPES.reader).to(FileReader);
container.bind<IWriter>(TYPES.writer).to(ConsoleWriter);
container.bind<IPetsFactory>(TYPES.petsFactory).to(PetsFactory);
container.bind<IDataFormatter>(TYPES.dataFormatter).to(DataFormatter);

export { container };
