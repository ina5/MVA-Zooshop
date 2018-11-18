// tslint:disable-next-line
import 'reflect-metadata';
jest.mock('../../../src/data/zooShop-database.ts');
import { ICommand } from '../../../src/contratcs/commands/command';
import { IZooShopDatabase } from '../../../src/contratcs/data-contract/zooShop-database';
import { IUser } from '../../../src/contratcs/user-contract/user';
import { ZooShopDatabase } from '../../../src/data/zooShop-database';
import { Role } from './../../../src/models/enum/role';
import { ClientCommandMock } from './clientCommand';

class FakeUser implements IUser {
    private _name: string;
    private _role: Role;

    constructor(name: string, role: Role) {
        this._name = name;
        this._role = role;
    }
    public get name(): string {
        return this._name;
    }
    public get role(): Role {
        return this._role;
    }
}
describe('ClientCommand', () => {

    let dbMock: IZooShopDatabase;

    describe('execute should', () => {
        beforeEach(() => {
            dbMock = new ZooShopDatabase();
        });
        it(`to throw if user's role is Employee!`, () => {
            // Arrange & Act
            const clientCommandFake: ICommand = new ClientCommandMock(dbMock);
            const parameters: string[] = ['login', 'ivan'];
            const user: FakeUser = new FakeUser('ivan', Role.employee);
            dbMock.currentUser = user;
            // Assert
            expect(() => clientCommandFake.execute(parameters))
                .toThrowError(`Invalid command for current User's Role`);
        });
        it(`to throw if user's role is Empty!`, () => {
            // Arrange & Act
            const clientCommandFake: ICommand = new ClientCommandMock(dbMock);
            const parameters: string[] = ['login', 'ivan'];
            const user: FakeUser = new FakeUser('ivan', Role.empty);
            dbMock.currentUser = user;
            // Assert
            expect(() => clientCommandFake.execute(parameters))
                .toThrowError(`No user in the current session!`);
        });
        it(`return success message if Role is client!`, () => {
            // Arrange & Act
            const clientCommandFake: ICommand = new ClientCommandMock(dbMock);
            const parameters: string[] = ['login', 'ivan'];
            const user: FakeUser = new FakeUser('ivan', Role.client);
            dbMock.currentUser = user;
            // Assert
            expect(clientCommandFake.execute(parameters))
                .toBe(`✔ Command is accepted: Validation successfull!`);
        });
    });
});
