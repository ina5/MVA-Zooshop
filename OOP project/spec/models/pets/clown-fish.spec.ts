import { IFish } from '../../../src/contratcs/pets-contracts/pets/fish';
import { WaterType } from '../../../src/models';
import { FoodType } from '../../../src/models/enum/food-type';
import { Sex } from '../../../src/models/enum/sex';
import { ClownFish } from '../../../src/models/pets/clown-fish-model';

describe('Fish class', () => {
    describe('constructor should', () => {
        it('throw when the breed length is less than 1', () => {
            // Arrange, Act & Assert
            expect(() => new ClownFish('', 100, FoodType.granules, Sex.female, 'maroon', WaterType.salt)).toThrowError();
          });

        it('throw when the price is less than 1', () => {
            // Arrange, Act & Assert
            expect(() => new ClownFish('Maroon', 0, FoodType.granules, Sex.female, 'maroon', WaterType.salt)).toThrowError();
          });

        it('throw when the price is greater than 10,000', () => {
            // Arrange, Act & Assert
            expect(() => new ClownFish('Maroon', 10001, FoodType.granules, Sex.female, 'maroon', WaterType.salt)).toThrowError();
          });

        it('NOT throw when the passed parameters are valid', () => {
            // Arrange, Act & Assert
            expect(() => new ClownFish('Maroon', 100, FoodType.granules, Sex.female, 'maroon', WaterType.salt)).not.toThrowError();
          });
    });

    describe('print should', () => {
        it('return correct string', () => {
          // Arrange
          const fish: IFish = new ClownFish('Maroon', 100, FoodType.granules, Sex.female, 'maroon', WaterType.salt);
          // Act
          const fishInfo: string = fish.print();
          // Assert
          // tslint:disable-next-line:max-line-length
          expect(fishInfo).toBe(`ID: 2\nBreed: Maroon\nPrice: 100lv\nFood: granules\nGender: female\nSkin color: maroon\nAquatic environment: salt`);
        });
      });
});