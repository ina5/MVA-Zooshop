// tslint:disable all -next-line:no-any
export interface IType {
    containerCommandFactory: symbol;
    addfurnituretocompany: symbol;
    createchair: symbol;
    createcompany: symbol;
    createtable: symbol;
    findfurniturefromcompany: symbol;
    removefurniturefromcompany: symbol;
    showcompanycatalog: symbol;
    furnituredatabase: symbol;
    modelsfactory: symbol;
    reader: symbol;
    writer: symbol;
    dataFormater: symbol;
    commandFactory: symbol;
    commandProcessor: symbol;

    [keys: string]: symbol;
}