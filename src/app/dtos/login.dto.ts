import { UserType } from "../enums/user-type.enum";

export class LoginDTO {

    username : string;
    
    password : string;
    
    user_type : UserType;

    constructor(data : any) {
        this.username = data.username;
        this.password = data.password;
        this.user_type = data.userType.toUpperCase();
    }
}