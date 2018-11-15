import { IMammal } from '../../../src/contratcs';
import { FoodType } from '../../../src/models/enum/food-type';
import { FurType } from '../../../src/models/enum/fur';
import { Sex } from '../../../src/models/enum/sex';
import { DifficultyDegree } from '../../../src/models/enum/train-difficulty';
import { Dog } from '../../../src/models/pets/dog-model';

describe('Dog class', () => {
    describe('constructor should', () => {
        it('throw an error if price is higher than 10000', () => {
            // Arrange, Act & Assert
            expect(() => new Dog('Rottweiler', 10001, FoodType.granules, Sex.male, FurType.long, DifficultyDegree.easy, true))
                .toThrowError();
        });
        it('throw an error if price is lower than 1', () => {
            // Arrange, Act & Assert
            expect(() => new Dog('Rottweiler', 0.5, FoodType.granules, Sex.male, FurType.long, DifficultyDegree.easy, true))
                .toThrowError();
        });
        it('throw an error if breed length is lower than 3', () => {
            // Arrange, Act & Assert
            expect(() => new Dog('Ya', 1500, FoodType.granules, Sex.male, FurType.long, DifficultyDegree.easy, true))
                .toThrowError();
        });
        it('throw an error if breed length is higher than 15', () => {
            // Arrange, Act & Assert
            expect(() => new Dog('BreeedOverSymbol', 1500, FoodType.granules, Sex.male, FurType.long, DifficultyDegree.easy, true))
                .toThrowError();
        });
        it('NOT throw when the passed parameters are valid', () => {
            // Arrange, Act & Assert
            expect(() => new Dog('Mops', 5000, FoodType.canned, Sex.male, FurType.short, DifficultyDegree.hard, false)).not.toThrowError();
        });
    });
    describe('print should', () => {
        it('return correct string', () => {
            // Arrange
            const dog: IMammal = new Dog('Rottweiler', 250, FoodType.granules, Sex.male, FurType.long, DifficultyDegree.easy, true);
            // Act
            const dogInfo: string = dog.info();
            // Assert
            console.log(dog.id);
            // tslint:disable-next-line:max-line-length
            expect(dogInfo).toBe(`ID: 2\nBreed: Rottweiler\nPrice: 250lv\nFood: granules\nGender: male\nFur type: long\nTrainable: easy\nIs it social: yes`);
        });
    });
});
