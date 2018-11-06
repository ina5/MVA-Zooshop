// tslint:disable-next-line
import 'reflect-metadata';
import { container } from './common/ioc.config';
import { IEngine } from './contratcs/engine-contracts';
import { Engine } from './engine';

const runInLocalEnvironment: () => void = (): void => {
    const engine: IEngine = container.get<IEngine>(Engine);
    engine.start();
};

runInLocalEnvironment();
