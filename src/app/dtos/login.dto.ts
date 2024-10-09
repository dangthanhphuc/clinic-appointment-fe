import { UserType } from "../enums/user-type.enum";

export interface LoginDTO {
    username : string;
    password : string;
    user_type : UserType;
}