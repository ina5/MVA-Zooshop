// tslint:disable all -next-line:no-any
export interface IType {
    reader: any;
    writer: any;
    commandFactory: any;
    containerCommandFactory: any;
    zooShopFactory: any;
    zooShopDatabase: any;
    modelsFactory: any;
    productFactory: any;
    dataFormatter: any;
    commandProcessor: any;
    commandParser: any;
    dataSeeder: any;

    receivecat: symbol;
    receivedog: symbol;
    receiveparrot: symbol;
    receivesnake: symbol;
    receivefish: symbol;
    receivefood: symbol;
    login: symbol;
    logout: symbol;
    listpets: symbol;
    listproducts: symbol;
    showpet: symbol;
    showshoppingcart: symbol;
    checkout: symbol;
    buyfood: symbol;
    buypet: symbol;


    [key: string]: symbol;

}
