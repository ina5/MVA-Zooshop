// tslint:disable
export class Validator {
    // success messages
    public static getReceived(className: string, petBreed: string): string {
        return `+ ${className} from breed ${petBreed} received`;
    }
    public static getFoodReceived(foodBrand: string): string {
        return `+ Food from brand ${foodBrand} received`;
    }
    public static getAnimaRemoved(id: number): string {
        return `- Zooshop sell pet with id: ${id}`;
    }
    public static getFoodRemoved(name: string): string {
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
