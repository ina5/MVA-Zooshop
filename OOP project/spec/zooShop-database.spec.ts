import { IMammal } from './../src/contratcs/pets-contracts/pets/mammal';
// tslint:disable-next-line
import 'reflect-metadata';
import { DifficultyDegree, FoodType, FurType, Sex } from '../src/models';
import { IZooShopDatabase } from './../src/contratcs/data-contract/zooShop-database';
import { IItem } from './../src/contratcs/item-contract/item';
import { ZooShopDatabase } from './../src/data/zooShop-database';
import { Cat } from './../src/models/pets/cat-model';

describe('Zooshop', () => {
    describe('method AddPet', () => {
        it('throw Error when key is empty string', () => {
            // Arrange & Act
            const db: IZooShopDatabase = new ZooShopDatabase();
            const item: IMammal = new Cat('Siamese', 8500, FoodType.canned, Sex.male, FurType.short, DifficultyDegree.hard, false);

            // Assert
            expect(() => db.addPet('', item)).toThrow('Key can not be empty string!');
        });
        it('correctly assign passed values', () => {
            // Arrange & Act
            const db: IZooShopDatabase = new ZooShopDatabase();
            const item: IMammal = new Cat('Siamese', 8500, FoodType.canned, Sex.male, FurType.short, DifficultyDegree.hard, false);

            // Assert
            expect(db.addPet('cat', item)).toBe('Success');
        });

    });
});
