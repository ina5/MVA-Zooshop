import { IUser } from '../../contratcs/user-contract';
import { Role } from '../enum/role';

export class User implements IUser {
    private readonly _name: string;
    private readonly _role: Role;

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
