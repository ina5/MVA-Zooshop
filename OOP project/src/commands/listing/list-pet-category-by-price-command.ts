import { inject, injectable } from 'inversify';
import { TYPES } from '../../common';
import { Validator } from '../../common/validator';
import { ICommand } from '../../contratcs/commands/command';
import { IZooShopDatabase } from '../../contratcs/data-contract/zooShop-database';
import { IPet } from './../../contratcs/pets-contracts/pets/pet';

@injectable()
export class ListPet implements ICommand {
    private readonly _data: IZooShopDatabase;

    public constructor(@inject(TYPES.zooShopDatabase) data: IZooShopDatabase) {
        this._data = data;
    }
    public execute(parameters: string[]): string {
        const [animal, criteria, animalPrice] = parameters;
        const petArray: IPet[] | undefined = this._data.pets.get(animal);
        if (petArray === undefined || petArray.length === 0) {
            throw new Error('PetArray is empty or undefined');
        } else if (criteria === undefined && animalPrice === undefined) {
            return petArray.map((item: IPet) => item.print()).join('\n#####################\n');
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

        petFilterPrice.forEach((el: IPet) => str += `\n###################\n ${el.print()}`);
        if (str === '') {
            return Validator.getErrorMessage(`We can not find pet which have criteria: ${byCriteria} to ${price}`);
        }

        return `Found ${str}`;
    }
}
