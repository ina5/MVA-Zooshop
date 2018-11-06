// tslint:disable
export class Constants {
  // success messages
  public static getChairCreatedSuccessMessage(furnitureModel: string): string {
    return `Chair ${furnitureModel} created`;
  }

  public static getTableCreatedSuccessMessage(furnitureModel: string): string {
    return `Table ${furnitureModel} created`;
  }

  public static getCompanyCreatedSuccessMessage(companyName: string): string {
    return `Company ${companyName} created`;
  }

  public static getFurnitureAddedSuccessMessage(furnitureModel: string): string {
    return `Furniture ${furnitureModel} added to company`;
  }

  public static getFurnitureRemovedSuccessMessage(furnitureModel: string): string {
    return `Furniture ${furnitureModel} removed from company}`;
  }
}
