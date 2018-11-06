// tslint:disable-next-line
import 'reflect-metadata';
import { Engine } from './engine/engine';

import { container} from './common/ioc.config';
import { IEngine } from './contracts';

const runInLocalEnvironment: () => void = (): void => {
    const engine: IEngine = container.get<IEngine>(Engine);
    engine.start();
};

runInLocalEnvironment();
