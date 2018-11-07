import { CommandParser } from './../engine/providers/command-parser';
import { IType } from './type-interface';
// tslint:disable-next-line:no-any
export const TYPES: IType = {
    reader: Symbol.for('reader'),
    writer: Symbol.for('writer'),
    commandFactory: Symbol.for('commandFactory'),
    zooShopFactory: Symbol.for('zooShopFactory'),
    zooShopDatabase: Symbol.for('zooShopDatabase'),
    modelsFactory: Symbol.for('modelsFactory'),
    productFactory: Symbol.for('productFactory'),
    dataFormatter: Symbol.for('dataFormatter'),
    commandProcessor: Symbol.for('commandProcessor'),
    commandParser: Symbol.for('commandParser')
};
