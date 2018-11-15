import { IProduct } from '../../../src/contratcs';
import { PetFood } from './../../../src/models/products/petfood-model';

describe('Pet Food', () => {
    describe('constructor should', () => {

        it('throw error when short name is passed', () => {
            // Arrange, Act and Assert
            expect(() => new PetFood('Ba', 'Purina', 2, 800))
                .toThrow('Name length cannot be less than 3 and more than 20 symbols');
        });

        it('throw error when long name is passed', () => {
            // Arrange, Act and Assert
            expect(() => new PetFood('InvalidNameForAnimaFoodInOurShop', 'Purina', 2, 800))
                .toThrowError('Name length cannot be less than 3 and more than 20 symbols');
        });

        it('throw error when short brand is passed', () => {
            // Arrange, Act and Assert
            expect(() => new PetFood('Whiskas', 'Ba', 2, 800))
                .toThrow('Brand length cannot be less than 3 and more than 20 symbols');
        });

        it('NOT throw error when valid brand is passed', () => {
            // Arrange, Act and Assert
            expect(() => new PetFood('Whiskas', 'Bamby', 2, 800))
                .not.toThrow('Brand length cannot be less than 3 and more than 20 symbols');
        });

        it('correctly assign brand when is valid', () => {
            // Arrange
            const food: IProduct = new PetFood('Kaufland', 'Purina', 2, 800);

            // Act and Assert
            expect(food.brand).toBe('Purina');
        });

        it('throw error when invalid price is passed', () => {
            // Arrange, Act and Assert
            expect(() => new PetFood('Whiskas', 'Kitty', 0, 800))
                .toThrow('Price cannot be less than 0.10lv and more than 200v.');
        });

        it('throw error when invalid weight is passed', () => {
            // Arrange, Act and Assert
            expect(() => new PetFood('Whiskas', 'Kitty', 5, 10001))
                .toThrow('Weight should be between 100g and 10 000g.');
        });
    });

    describe('Food info should', () => {
        it('print correct string', () => {
            // Arrange
            const food: IProduct = new PetFood('Whiskas', 'Pauch', 4, 250);

            // Act
            const info: string = food.info();

            // Assert
            expect(info).toBe('Whiskas Pauch\nPrice: 4lv\nWeight: 250g');
        });
    });
});
