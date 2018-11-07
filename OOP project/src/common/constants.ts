// tslint:disable
export class Constants {
    // success messages
    public static getDogReceivedSuccessMessage(petBreed: string): string {
        return `+ Dog from breed ${petBreed} received`;
    }
    public static getCatReceivedSuccessMessage(petBreed: string): string {
        return `+ Cat from breed ${petBreed} received`;
    }
    public static getParrotReceivedSuccessMessage(petBreed: string): string {
        return `+ Parrot from breed ${petBreed} received`;
    }
    public static getSnakeReceivedSuccessMessage(petBreed: string): string {
        return `+ Snake from breed ${petBreed} received`;
    }
    public static getFishReceivedSuccessMessage(petBreed: string): string {
        return `+ Fish from breed ${petBreed} received`;
    }
    public static getFoodReceivedSuccessMessage(foodBrand: string): string {
        return `+ Food from brand ${foodBrand} received`;
    }
    public static getAnimaRemovedSuccessMessage(id: number): string {
        return `- Zooshop sell pet with id: ${id}`;
    }
    public static getFoodRemovedSuccessMessage(name: string): string {
        return `- Zooshop sell food ${name}`;
    }
    // error messages
    public static getInvalidCommandErrorMessage(commandName: string): string {
        return `Х Invalid command name: ${commandName}`;
    }
    public static getAnimalNotFoundErrorMessage(id: number): string {
        return `Х Pet with id: ${id} was already sold! :(`;
    }
    public static getFoodNotFoundErrorMessage(name: string): string {
        return `Х Food ${name} was already sold! :(`;
    }
}
