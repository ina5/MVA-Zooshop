import { IUser } from './../../contratcs/user-contract/user';
import { Role } from './../enum/role';
export class User implements IUser {
    private _name: string;
    private _role: Role;

    constructor(name: string, role: Role) {
        this._name = name;
        this._role = role;
    }
    public get name(): string {
        return this._name;
    }
    public get role(): Role {
        return this._role;
    }
}
