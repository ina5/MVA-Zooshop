import { CommandParser } from './../engine/providers/command-parser';
// tslint:disable all -next-line:no-any
export interface IType {
    reader: any;
    writer: any;
    commandFactory: any;
    zooShopFactory: any;
    zooShopDatabase: any;
    modelsFactory: any;
    productFactory: any;
    dataFormatter: any;
    commandProcessor: any;
    commandParser: any;
    userSession: any;
    dataSeeder: any;
}
