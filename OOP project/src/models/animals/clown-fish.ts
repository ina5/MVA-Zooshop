import { Sex } from '../common/sex';
import { WaterType } from './../common/water';
import { IFish } from './../contracts/fish';
import { Animals } from './animals-model';

export class ClownFish extends Animals implements IFish {
    private readonly _color: string;
    private readonly _size: string;
    private readonly _species: string;
    private readonly _waterType: WaterType;

    constructor(price: number, foodType: string, sex: Sex, species: string, size: string, color: string, waterType: WaterType) {
        super(price, foodType, sex);
        this._species = species;
        this._waterType = waterType;
        this._color = color;
        this._size = size;
    }
    public get color(): string {
        return this._color;
    }
    public get size(): string {
        return this._size;
    }
    public get waterType(): WaterType {
        return this._waterType;
    }
    public get species(): string {
        return this._species;
    }
}
