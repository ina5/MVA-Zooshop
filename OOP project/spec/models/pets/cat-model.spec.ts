// tslint:disable-next-line
import 'reflect-metadata';
import { IMammal } from '../../../src/contratcs';
import { DifficultyDegree, FurType, Sex } from '../../../src/models/enum';
import { FoodType } from '../../../src/models/enum/food-type';
import { Cat } from '../../../src/models/pets/cat-model';

describe('Cat', () => {
    describe('constructor should', () => {
        it('correctly assign passed values', () => {
            // Arrange & Act
            const cat: IMammal = new Cat('Siamese', 8500, FoodType.canned, Sex.male, FurType.short, DifficultyDegree.hard, false);

            // Assert
            expect(cat.breed).toBe('Siamese');
            expect(cat.price).toBe(8500);
            expect(cat.foodType).toBe('canned');
            expect(cat.sex).toBe('male');
            expect(cat.furType).toBe('short');
            expect(cat.trainable).toBe('hard');
            expect(cat.social).toBe(false);

        });
        it('to throw when we try to change some of the field', () => {
            // Arrange
            const cat: IMammal = new Cat('Siamese', 8500, FoodType.canned, Sex.male, FurType.short, DifficultyDegree.hard, false);

            // Act & Assert
            expect(() => (cat.breed = 'new-breed')).toThrow();
            expect(() => (cat.price = 2)).toThrow();
        });
        it('throw an error if price is higher than 10000', () => {
            // Arrange, Act & Assert
            expect(() => new Cat('Siamese', 10500, FoodType.canned, Sex.male, FurType.short, DifficultyDegree.hard, false))
                .toThrowError();
        });
    });
});
