import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Constants } from '../../common/constants';
import { ICommand } from '../../contratcs/commands/command';
import { IPet } from '../../contratcs/pets-contracts/pets/pet';
import { IZooShopDatabase } from './../../contratcs/data-contract/zooShop-database';

@injectable()
export class SellAnimalFromShop implements ICommand {
    private readonly _data: IZooShopDatabase;

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._data = data;
    }
    public execute(parameters: string[]): string {
        const [animalId] = parameters;

        const foundAnimalIdIndex: number = this._data.pets.findIndex((searchId: IPet) => searchId.id === +animalId);
        if (foundAnimalIdIndex === -1) {
            throw new Error(Constants.getAnimalNotFoundErrorMessage(+animalId));
        }
        this._data.pets.splice(foundAnimalIdIndex, 1);

        return Constants.getAnimaRemovedSuccessMessage(+animalId);
    }
}
