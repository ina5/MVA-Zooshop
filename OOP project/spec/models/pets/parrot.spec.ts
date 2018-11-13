import { IBird } from '../../../src/contratcs';
import { FoodType } from './../../../src/models/enum/food-type';
import { Sex } from './../../../src/models/enum/sex';
import { Parrot } from './../../../src/models/pets/parrot-model';
describe('Fish class', () => {
    describe('constructor should', () => {
        it('throw when the breed length is less than 1', () => {
            // Arrange, Act & Assert
            expect(() => new Parrot('', 100, FoodType.seeds, Sex.male, true, false)).toThrowError();
          });

        it('throw when the price is less than 1', () => {
            // Arrange, Act & Assert
            expect(() => new Parrot('Macaw', 0, FoodType.seeds, Sex.male, true, false)).toThrowError();
          });

        it('throw when the price is greater than 10,000', () => {
            // Arrange, Act & Assert
            expect(() => new Parrot('Macaw', 10001, FoodType.seeds, Sex.male, true, false)).toThrowError();
          });

        it('NOT throw when the passed parameters are valid', () => {
            // Arrange, Act & Assert
            expect(() => new Parrot('Macaw', 100, FoodType.seeds, Sex.male, true, false)).not.toThrowError();
          });
    });

    describe('print should', () => {
        it('return correct string', () => {
          // Arrange
          const parrot: IBird = new Parrot('Macaw', 100, FoodType.seeds, Sex.male, true, false);
          // Act
          const parrotInfo: string = parrot.print();
          // Assert

          expect(parrotInfo).toBe(`ID: 2\nBreed: Macaw\nPrice: 100lv\nFood: seeds\nGender: male\nCan talk: yes\nCan sing: no`);
        });
      });
});
