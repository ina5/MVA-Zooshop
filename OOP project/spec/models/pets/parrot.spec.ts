import { Parrot, Sex } from '../../../src/models';

import { FoodType } from '../../../src/models/enum/food-type';

import { IBird } from '../../../src/contratcs';

describe('Fish class', () => {
  describe('constructor should', () => {
    it('throw when the breed length is less than 3', () => {
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
      class FakeParrot extends Parrot {
        constructor(breed: string, price: number, food: FoodType, sex: Sex, canTalk: boolean, canSing: boolean) {
          super(breed, price, food, sex, canTalk, canSing);
          super.clear();
          super.info();
        }
      }

      const parrot: IBird = new FakeParrot('Macaw', 100, FoodType.seeds, Sex.male, true, false);

      // Act
      const parrotInfo: string = parrot.info();

      // Assert
      expect(parrotInfo).toBe(`ID: 0\nBreed: Macaw\nPrice: 100lv\nFood: seeds\nGender: male\nCan talk: yes\nCan sing: no`);
    });
  });
});
