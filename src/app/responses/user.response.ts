import { UserStatus } from "../enums/user.status";
import { RoleResponse } from "./role.response";

export class UserResponse {
    id : number;
    username : string;
    img_url : string;
    email : string;
    name : string;
    address : string;
    phone_number : string;
    date_of_birth : Date;
    private _gender : boolean;
    type : string;
    status : UserStatus;
    role : RoleResponse;
    
    constructor(data : any) {
        this.id = data.id;
        this.username = data.username;
        this.email = data.email;
        this.img_url = data.img_url;
        this.name = data.name;
        this.address = data.address;
        this.phone_number = data.phone_number;
        this.date_of_birth = data.date_of_birth;
        this._gender = data.gender;
        this.type = data.type;
        this.status = data.status;
        this.role = data.role;
    }

    get gender() : string {
        return this._gender ? "Nam" : "Nữ";
    }

}