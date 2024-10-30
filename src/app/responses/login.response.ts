import { UserType } from "../enums/user-type.enum";

export interface LoginResponse {
    token : string;
    user_id : number;
    roles : string[];
    user_type: UserType;
}