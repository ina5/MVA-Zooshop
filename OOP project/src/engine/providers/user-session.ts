import { injectable } from 'inversify/dts/annotation/injectable';
import { IUserSession } from '../../contratcs';
import { IUser } from './../../contratcs/user-contract/user';
@injectable()
export class UserSession implements IUserSession {
    private _currentUser: IUser;

    public get currentUser(): IUser {
        return this._currentUser;
    }

    public set setCurrentUser(v: IUser) {
        this._currentUser = v;
    }

}
