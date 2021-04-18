import { IUser } from "src/app/models/user.model";

export namespace AuthActions{
    export class Login{
        static readonly type = '[Auth] Login';
        constructor(public payload: IUser){}
    }
    export class Logined{
        static readonly type = '[Auth] Logined';
        constructor(public token: string){}
    }
    export class Logout{
        static readonly type = '[Auth] Logout';
        constructor(){}
    }
    export class Logouted{
        static readonly type = '[Auth] Logouted';
        constructor(){}
    }
    export class Register{
        static readonly type = '[Auth] Register';
        constructor(public payload: IUser){}
    }
}