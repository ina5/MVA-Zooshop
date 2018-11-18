// tslint:disable-next-line
import 'reflect-metadata';

import { ICommand } from '../../../src/contratcs/commands/command';
import { IZooShopDatabase } from '../../../src/contratcs/data-contract/zooShop-database';
import { IModelsFactory } from '../../../src/contratcs/engine-contracts/factories/models-factory';

describe('Login', () => {
    let data: jest.Mock<IZooShopDatabase>;
    let modelsFactory: jest.Mock<IModelsFactory>;
    describe('execute method should', () => {
        beforeEach(() => {
            data = jest.fn<IZooShopDatabase>().mockImplementation(() => {
                return {
                    pets: [],
                    product: []
                };
            });

            modelsFactory = jest.fn<IModelsFactory>().mockImplementation(() => {
                return {
                    registerUser: jest.fn()
                };
            });
        });

        it('return correct value', () => {
            // Arrange
            class FakeLogin implements ICommand {
                private _data: IZooShopDatabase;
                private _factory: IModelsFactory;

                constructor(database: IZooShopDatabase, factory: IModelsFactory) {
                    this._data = database;
                    this._factory = factory;
                }
                public execute(parameters: string[]): string {
                    return 'test';
                }
            }

            // Act
            const log: ICommand = new FakeLogin(new data(), new modelsFactory());
            const param: string[] = ['nevermind'];

            // Assert
            expect(log.execute(param)).toBe('test');
        });
    });
    describe('constructor should', () => {
        beforeEach(() => {
            data = jest.fn<IZooShopDatabase>().mockImplementation(() => {
                return {
                    pets: [],
                    product: []
                };
            });

            modelsFactory = jest.fn<IModelsFactory>().mockImplementation(() => {
                return {
                    registerUser: jest.fn()
                };
            });
        });

        it('correct assign database', () => {
            // Arrange
            class FakeLogin implements ICommand {
                private _data: IZooShopDatabase;
                private _factory: IModelsFactory;

                constructor(database: IZooShopDatabase, factory: IModelsFactory) {
                    this._data = database;
                    this._factory = factory;
                }
                public execute(parameters: string[]): string {
                    return 'test';
                }
                public get zooShop(): IZooShopDatabase {
                    return this._data;
                }
            }

            // Act
            const arr: IZooShopDatabase = new data();
            const log: FakeLogin = new FakeLogin(new data(), new modelsFactory());
            const param: string[] = ['nevermind'];

            // Assert
            expect(log.zooShop).toEqual(arr);
        });
    });
});
