// tslint:disable
import { Container, interfaces } from 'inversify';
import { TYPES } from './types';
import { CommandFactory } from './../engine/factories/command-factory';
import { ContainerCommandFactory } from './../engine/factories/container-command-factory';
import { ICommand, IReader, IModelsFactory, ICommandProcessor, ICommandParser, IWriter, IEngine, IDataFormatter, ICommandFactory, IDataSeeder } from '../contratcs';
import { FileReader, ModelsFactory, ConsoleWriter, Engine, DataFormatter, DataSeeder } from '../engine';
import { IZooShopDatabase } from '../contratcs/data-contract/zooShop-database';
import { ZooShopDatabase } from '../data/zooShop-database';
import { CommandProcessor } from '../engine/providers/command-processor';
import { CommandParser } from '../engine/providers/command-parser';
import { ReceiveCat, ReceiveDog, ReceiveFish, ReceiveParrot, ReceiveSnake, ReceiveFood, Login, Logout, ListPets, ListProducts, ShowPet, Checkout, BuyFood, BuyPet } from '../commands';

const container: Container = new Container();

container
    .bind<interfaces.Factory<ICommand>>(TYPES.containerCommandFactory)
    .toFactory<ICommand>((context: interfaces.Context) =>
        (commandName: string): ICommand => context.container.get<ICommand>(TYPES[commandName]));

container.bind<IReader>(TYPES.reader).to(FileReader).inSingletonScope();
container.bind<IZooShopDatabase>(TYPES.zooShopDatabase).to(ZooShopDatabase).inSingletonScope();
container.bind<IModelsFactory>(TYPES.modelsFactory).to(ModelsFactory).inSingletonScope();
container.bind<ICommandProcessor>(TYPES.commandProcessor).to(CommandProcessor).inSingletonScope();
container.bind<ICommandParser>(TYPES.commandParser).to(CommandParser).inSingletonScope();
container.bind<IWriter>(TYPES.writer).to(ConsoleWriter).inSingletonScope();
container.bind<IEngine>(Engine).to(Engine).inSingletonScope();
container.bind<IDataFormatter>(TYPES.dataFormatter).to(DataFormatter).inSingletonScope();
container.bind<ICommandFactory>(TYPES.commandFactory).to(CommandFactory).inSingletonScope();
container.bind<IDataSeeder>(TYPES.dataSeeder).to(DataSeeder).inSingletonScope();

// command bindings
container.bind<ICommand>(TYPES.receivecat).to(ReceiveCat);
container.bind<ICommand>(TYPES.receivedog).to(ReceiveDog);
container.bind<ICommand>(TYPES.receivefish).to(ReceiveFish);
container.bind<ICommand>(TYPES.receiveparrot).to(ReceiveParrot);
container.bind<ICommand>(TYPES.receivesnake).to(ReceiveSnake);
container.bind<ICommand>(TYPES.receivefood).to(ReceiveFood);
container.bind<ICommand>(TYPES.login).to(Login);
container.bind<ICommand>(TYPES.logout).to(Logout);
container.bind<ICommand>(TYPES.listpets).to(ListPets);
container.bind<ICommand>(TYPES.listproducts).to(ListProducts);
container.bind<ICommand>(TYPES.showpet).to(ShowPet);
container.bind<ICommand>(TYPES.checkout).to(Checkout);
container.bind<ICommand>(TYPES.buyfood).to(BuyFood);
container.bind<ICommand>(TYPES.buypet).to(BuyPet);

export { container };
