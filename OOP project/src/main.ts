// tslint:disable-next-line
import 'reflect-metadata';
import { IEngine } from './contratcs/engine-contracts';
import { Engine } from './engine';

const runInLocalEnvironment: () => void = (): void => {
    const engine: IEngine = new Engine();
    engine.start();
};

runInLocalEnvironment();
