import { IPet } from '../../../src/contratcs';
import { FoodType } from './../../../src/models/enum/food-type';
import { Sex } from './../../../src/models/enum/sex';
import { PetMock } from './petMock';

describe('Pet', () => {
    describe('contructor should', () => {

        it('correctly assign passed values', () => {

            // Arrange & Act
            const pet: IPet = new PetMock('Breed', 100, FoodType.canned, Sex.male);

            // Assert
            expect(pet.breed).toBe('Breed');
            expect(pet.price).toBe(100);
            expect(pet.foodType).toBe('canned');
            expect(pet.sex).toBe('male');
        });
        it('throw an error if some of values are uncorectly', () => {

            // Arrange & Act & Assert
            expect(() => new PetMock('BreeedOverSymbol', 1500, FoodType.granules, Sex.male))
                .toThrowError(`Breed length cannot be less than 1 symbol and more than 15 symbols.`);
            expect(() => new PetMock('Breeed', 1000000, FoodType.granules, Sex.male))
                .toThrowError(`Price cannot be less than 1lv and over 10 000lv.`);
        });
    });
    describe('pet info should', () => {
        it('return correct string', () => {
            // Arrange
            class FakePet extends PetMock {
                // tslint:disable-next-line:max-line-length
                constructor(breed: string, price: number, food: FoodType, sex: Sex) {
                    super(breed, price, food, sex);
                    super.clear();
                    super.info();
                }
            }
            const pet: IPet = new FakePet('Breed', 100, FoodType.canned, Sex.male);
            // Act
            const petInfo: string = pet.info();

            // Assert
            // tslint:disable-next-line:max-line-length
            expect(petInfo).toBe(`ID: 0\nBreed: Breed\nPrice: 100lv\nFood: canned\nGender: male\n`);
        });
    });
});
