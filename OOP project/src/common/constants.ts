// tslint:disable
export class Constants {
    // success messages
    public static getDogReceivedSuccessMessage(petBreed: string): string {
        return `!!! Dog from breed ${petBreed} received`;
    }
    public static getCatReceivedSuccessMessage(petBreed: string): string {
        return `!!! Cat from breed ${petBreed} received`;
    }
    public static getParrotReceivedSuccessMessage(petBreed: string): string {
        return `!!! Parrot from breed ${petBreed} received`;
    }
    public static getSnakeReceivedSuccessMessage(petBreed: string): string {
        return `!!! Snake from breed ${petBreed} received`;
    }
    public static getFishReceivedSuccessMessage(petBreed: string): string {
        return `!!! Fish from breed ${petBreed} received`;
    }
    public static getAnimaRemovedSuccessMessage(id: number): string {
        return `- Zooshop sell pet with id: ${id}`;
    }
    // error messages
    public static getInvalidCommandErrorMessage(commandName: string): string {
        return `Х Invalid command name: ${commandName}`;
    }
    public static getAnimalNotFoundErrorMessage(id: number): string {
        return `Х Pet with id: ${id} was already sold! :(`;
    }
}
