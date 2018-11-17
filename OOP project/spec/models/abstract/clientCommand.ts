// tslint:disable-next-line
import 'reflect-metadata';
import { ClientCommand } from '../../../src/commands/abstract';
import { IZooShopDatabase } from '../../../src/contratcs/data-contract/zooShop-database';

export class ClientCommandMock extends ClientCommand {
    public get zooShopDb(): IZooShopDatabase {
        return this.zooShop;
    }
}
