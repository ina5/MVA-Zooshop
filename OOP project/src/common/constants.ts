// tslint:disable
export class Constants {
    // success messages
    public static getDogReceivedSuccessMessage(pet: string): string {  
        return `!!! Dog ${pet} received`;
    }
    public static getCatReceivedSuccessMessage(pet: string): string {
        return `!!! Cat ${pet} received`;
    }
    public static getParrotReceivedSuccessMessage(pet: string): string {
        return `!!! Parrot ${pet} received`;
    }
    public static getSnakeReceivedSuccessMessage(pet: string): string {
        return `!!! Snake ${pet} received`;
    }
    public static getFishReceivedSuccessMessage(pet: string): string {
        return `!!! Fish ${pet} received`;
    }
}
