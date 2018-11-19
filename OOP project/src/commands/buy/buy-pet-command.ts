import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { Validator } from '../../common/validator';
import { ICommand } from '../../contratcs/commands/command';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IPet } from '../../contratcs/pets-contracts/pets/pet';
import { ClientCommand } from '../abstract/client-command';

@injectable()
export class BuyPet extends ClientCommand implements ICommand {

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        super(data);
    }
    public execute(parameters: string[]): string {
        super.execute(parameters);
        const [animal, animalId] = parameters;
        const petArray: IPet[] | undefined = this._zooShopDatabase.pets.get(animal);
        if (petArray === undefined) {
            return Validator.getAnimalNotFoundErrorMessage(+animalId);
        } else {
            const indexInPetArr: number = petArray.findIndex((el: IPet) => el.id === +animalId);
            if (indexInPetArr === -1) {
                Validator.getErrorMessage('this pet is already sold.');
            }
            const soldPet: IPet = petArray[indexInPetArr];
            this._zooShopDatabase.shoppingCart.push(soldPet);
            petArray.splice(indexInPetArr, 1);
        }

        return Validator.getAnimaRemovedMessage(+animalId);
    }
}
