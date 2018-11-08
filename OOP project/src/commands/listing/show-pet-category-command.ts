import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { ICommand } from '../../contratcs/commands/command';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IPet } from '../../contratcs/pets-contracts/pets/pet';

@injectable()
export class ShowPet implements ICommand {
    private readonly _data: IZooShopDatabase;

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._data = data;
    }
    public execute(parameters: string[]): string {
        const [animal, criteria, animalPrice] = parameters;
        const petArray: IPet[] | undefined = this._data.pets.get(animal);
        if (petArray === undefined) {
            throw new Error('PetArray is undefined!!!');
        } else {

            return this.searchAnimalByPriceCriteria(petArray, criteria, +animalPrice);
        }
    }
    private searchAnimalByPriceCriteria(petFoundArray: IPet[], byCriteria: string, price: number): string {
        let petFilterPrice: IPet[] = [];
        if (byCriteria === 'Equal') {
            petFilterPrice = petFoundArray.filter((el: IPet) => el.price === price);
        } else if (byCriteria === 'UpTo') {
            petFilterPrice = petFoundArray.filter((el: IPet) => el.price < price);
        } else if (byCriteria === 'Over') {
            petFilterPrice = petFoundArray.filter((el: IPet) => el.price > price);
        }
        let str: string = '';

        petFilterPrice.forEach((el: IPet) => str += el.print());
        if (str === '') {
            return `We can not find pet which have criteria: ${byCriteria} to ${price}`;
        }

        return str;
    }
}
