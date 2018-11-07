import { IProduct } from '../../products-contract';

export interface IProductFactory {
    receiveFood(name: string, brand: string, price: number, quantity: number): IProduct;
}
