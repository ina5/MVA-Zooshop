import { IProduct } from '../contratcs';
import { IPet, IZooshop } from '../contratcs/pets-contracts';

export class Zooshop implements IZooshop {
    private readonly _pets: IPet[];
    private readonly _products: IProduct[];
    public get pets(): IPet[] {
        return this._pets;
    }
    public get products(): IProduct[] {
        return this._products;
    }
    public receiveItem(item: IPet | IProduct): void {
        
    }
    public sellItem(item: string | number): void {
        throw new Error('Method not implemented.');
    }
    public productList(): string {
        const printProducts: string = this.products
            .map((product: IProduct) => product.print())
            .join('\n');

        return `${printProducts}`;
    }
    public petList(): string {
        const printPets: string = this.pets
            .map((pet: IPet) => pet.print())
            .join('\n');

        return `${printPets}`;
    }
}
