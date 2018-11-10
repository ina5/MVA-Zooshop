// tslint:disable-next-line:no-import-side-effect
import 'reflect-metadata';
import { container } from './common/ioc.config';
import { IEngine } from './contratcs/engine-contracts';
import { Engine } from './engine';

const runInLocalEnvironment: () => void = (): void => {
    const engine: IEngine = container.get<IEngine>(Engine);

    // Const userSes: IUserSession = container.get<IUserSession>(UserSession);
    engine.start();
};

runInLocalEnvironment();
