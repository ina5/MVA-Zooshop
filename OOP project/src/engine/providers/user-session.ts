import { injectable } from 'inversify';
import { IUserSession } from '../../contratcs/engine-contracts/providers/user-session';
import { IUser } from '../../contratcs/user-contract';
@injectable()
export class UserSession implements IUserSession {
    private _currentUser: IUser;
    public set currentUser(v: IUser) {
        this._currentUser = v;
    }

}
