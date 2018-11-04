import { IPetsDatabase } from '../contratcs/data-contract/shop-database';
import { IPet } from '../contratcs/pets-contracts';

export class PetsDatabase implements IPetsDatabase {
    private static readonly _INSTANCE: IPetsDatabase = new PetsDatabase();

    private readonly _pets: IPet[];

    private constructor() {
        this._pets = [];
    }

    public static get INSTANCE(): IPetsDatabase {
        return this._INSTANCE;
    }

    public get pets(): IPet[] {
        return this._pets;
    }
}
