// tslint:disable-next-line
import 'reflect-metadata';
import { IZooShopDatabase } from '../../../src/contratcs/data-contract/zooShop-database';
import { ZooShopDatabase } from './../../../src/data/zooShop-database';
import { ClientCommandMock } from './clientCommand';
jest.mock('./../../../src/data/zooShop-database.ts');

describe('ClientCommand', () => {
    let dbMock: IZooShopDatabase;
    describe('contructor should', () => {

        it('correctly assign passed values', async () => {
            dbMock = await new ZooShopDatabase();
            const clientCommandFake: ClientCommandMock =  new ClientCommandMock(dbMock);
            // Assert & Act

            expect(clientCommandFake.zooShopDb).toBe(dbMock);
            // C const parameters: string[] = ['fake', 'params'];
            // C const test: string = clientCommandFake.execute(parameters);
            // C expect(test).toHaveBeenCalled();
        });
    });
});
