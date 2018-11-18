import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand } from '../../contratcs/commands/command';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { ClientCommand } from '../abstract/client-command';
import { IPet } from './../../contratcs/pets-contracts/pets/pet';

@injectable()
export class ShowPet extends ClientCommand implements ICommand {
    private readonly _data: IZooShopDatabase;

    public constructor(
        @inject(TYPES.zooShopDatabase) data: IZooShopDatabase
    ) {
        super(data);
    }
    public execute(parameters: string[]): string {
        super.execute(parameters);
        const [animal, criteria, animalPrice] = parameters;
        const petArray: IPet[] | undefined = this._data.pets.get(animal);

        if (petArray === undefined || petArray.length === 0) {
            return Validator.getErrorMessage('we haven\'t this kind of pet.');
        } else if (criteria === undefined && animalPrice === undefined) {
            // tslint:disable-next-line:max-line-length
            return `\n>> List only ${animal} \n${petArray.map((item: IPet) => item.info()).join('\n\n')}\n`;
        } else {

            return this.searchAnimalByPriceCriteria(petArray, criteria, +animalPrice);
        }

    }
    private searchAnimalByPriceCriteria(petFoundArray: IPet[], criteria: string, price: number): string {
        let petFilterPrice: IPet[] = [];
        if (criteria === 'equal') {
            petFilterPrice = petFoundArray.filter((el: IPet) => el.price === price);
        } else if (criteria === 'to') {
            petFilterPrice = petFoundArray.filter((el: IPet) => el.price < price);
        } else if (criteria === 'over') {
            petFilterPrice = petFoundArray.filter((el: IPet) => el.price > price);
        }

        return `\n>> List filtered pets.\n${petFilterPrice.length === 0
            ? Validator.getErrorMessage(`we haven\'t pet which is ${criteria} ${price}lv`)
            : petFilterPrice.map((el: IPet) => el.info()).join('\n\n')
            }`;
    }
}
