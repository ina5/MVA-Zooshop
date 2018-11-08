import { inject, injectable } from 'inversify';

import { ICommand, IPet, IProduct } from '../../contratcs';

import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';

import { TYPES } from '../../common';

import { Validator } from '../../common/validator';

@injectable()
export class SellFood implements ICommand {
    private readonly _data: IZooShopDatabase;

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._data = data;
    }
    public execute(parameters: string[]): string {
        const [name, quantity] = parameters;

        const foundProductIndex: number = this._data.products.findIndex((food: IProduct) => food.name === name);
        const quantityNumber: number = (Number(quantity));
        if (foundProductIndex === -1) {
            return Validator.getFoodNotFoundErrorMessage(name);
        }
        if (this._data.products[foundProductIndex].quantity - quantityNumber === 0) {
            this._data.products.splice(foundProductIndex, 1);
        } else {
            this._data.products[foundProductIndex].quantity -= quantityNumber;
        }

        return Validator.getFoodRemovedMessage(name);
    }
}
