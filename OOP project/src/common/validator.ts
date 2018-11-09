// tslint:disable
export class Validator {
    // success messages
    public static getReceivedMessage(className: string, petBreed: string): string {
        return `+ ${className} from breed ${petBreed} received`;
    }
    public static getFoodReceivedMessage(foodBrand: string): string {
        return `+ Food from brand ${foodBrand} received`;
    }
    public static getAnimaRemovedMessage(id: number): string {
        return `- Zooshop sell pet with id: ${id}`;
    }
    public static getFoodRemovedMessage(name: string): string {
        return `- Zooshop sell food ${name}`;
    }
    public static getSuccessMessage(message: string): string {
        return `${message}`;
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
    public static getErrorMessage(message: string): string {
        throw `X Opps ${message}`;
    }
}
