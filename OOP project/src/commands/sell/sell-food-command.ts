import { inject, injectable } from 'inversify';

import { ICommand, IPet, IProduct } from '../../contratcs';

import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';

import { TYPES } from '../../common';

import { Constants } from '../../common/constants';

@injectable()
export class SellFood implements ICommand {
    private readonly _data: IZooShopDatabase;

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._data = data;
    }
    public execute(parameters: string[]): string {
        const [name] = parameters;

        const foundProductIdIndex: number = this._data.products.findIndex((food: IProduct) => food.name === name);
        if (foundProductIdIndex === -1) {
            throw new Error(Constants.getFoodNotFoundErrorMessage(name));
        }
        this._data.products.splice(foundProductIdIndex, 1);

        return Constants.getFoodRemovedSuccessMessage(name);
    }
}
