import { IPet } from '../../../src/contratcs';
import { Pet, Sex, Snake } from '../../../src/models';
import { FoodType } from './../../../src/models/enum/food-type';

describe('Snake', () => {
    describe('contructor should', () => {
        it('throw when invalid skin color is passed', () => {
            // Arrange Act Assert
            expect(() => new Snake('Anakonda', 2500, FoodType.mice, Sex.female, 're', true))
                .toThrow('Skin color length cannot be less than 3 symbols.');
        });

        it('throw when invalid breed size is passed', () => {
            // Arrange Act Assert
            expect(() => new Snake('An', 2500, FoodType.mice, Sex.female, 'green', true))
                .toThrow('Breed length cannot be less than 1 symbol and more than 15 symbols.');
        });

        it('throw when invalid price is passed', () => {
            // Arrange Act Assert
            expect(() => new Snake('Anakonda', 0, FoodType.mice, Sex.female, 'green', true))
                .toThrow('Price cannot be less than 1lv and over 10 000lv.');
        });

        it('not throw error when valid values are passed', () => {
            // Arrange Act Assert
            expect(() => new Snake('Anakonda', 2500, FoodType.mice, Sex.female, 'green', true))
                .not.toThrowError();
        });
    });

    describe('pet info should', () => {
        it('return correct string', () => {
            // Arrange
            class FakeSnake extends Snake {
                constructor(breed: string, price: number, food: FoodType, sex: Sex, skinColor: string, venomous: boolean) {
                    super(breed, price, food, sex, skinColor, venomous);
                    super.clear();
                    super.info();
                }
            }
            const snake: IPet = new FakeSnake('Cobra', 2500, FoodType.mice, Sex.female, 'purple', true);

            // Act
            const info: string = snake.info();

            // Assert
            expect(info).toBe('ID: 0\nBreed: Cobra\nPrice: 2500lv\nFood: mice\nGender: female\nSkin color: purple\nVenomous: true');
        });
    });
});
