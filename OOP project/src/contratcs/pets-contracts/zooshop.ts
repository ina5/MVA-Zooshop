import { IProduct } from '..';
import { IPet } from './pets/index';

export interface IZooshop {
    pets: IPet[];
    products: IProduct[];
    receiveItem(item: IPet | IProduct): void;
    sellItem(item: number | string): void;
    petList(): string;
    productList(): string;
}
