import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Constants } from '../../common/constants';
import { ICommand } from '../../contratcs/commands/command';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IPet } from '../../contratcs/pets-contracts/pets/pet';

@injectable()
export class SellPet implements ICommand {
    private readonly _data: IZooShopDatabase;

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._data = data;
    }
    public execute(parameters: string[]): string {
        const [animal, animalId] = parameters;
        const petArray: IPet[] | undefined = this._data.pets.get(animal);
        if (petArray === undefined) {
            throw new Error('The key can not be undefined!');
        } else {
            const indexInPetArr: number = petArray.findIndex((el: IPet) => el.id === +animalId);
            petArray.splice(indexInPetArr, 1);
        }

        return Constants.getAnimaRemovedSuccessMessage(+animalId);
    }
}
