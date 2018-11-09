import { IUser } from '../../user-contract/user';

export interface IUserSession {
    currentUser: IUser;
}
