import { IType } from './type-interface';

// tslint:disable:no-any
export const TYPES: IType = {
    containerCommandFactory: Symbol.for('containerCommandFactory'),
    addfurnituretocompany : Symbol.for('add-furn-company'),
    createchair: Symbol.for('create-chair'),
    createcompany: Symbol.for('create-company'),
    createtable: Symbol.for('create-table'),
    findfurniturefromcompany: Symbol.for('find-furn-from-company'),
    removefurniturefromcompany: Symbol.for('remove-furn-from-company'),
    showcompanycatalog: Symbol.for('show-company-catalog'),
    furnituredatabase: Symbol.for('furniture-database'),
    modelsfactory: Symbol.for('models-factory'),
    reader: Symbol.for('reader'),
    writer: Symbol.for('writer'),
    dataFormater: Symbol.for('dataFormater'),
    commandFactory: Symbol.for('commandFactory'),
    commandProcessor: Symbol.for('commandProcessor')
};
