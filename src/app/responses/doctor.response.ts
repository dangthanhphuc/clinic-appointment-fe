import { LocationResponse } from "./location.response";
import { UserResponse } from "./user.response";

export class DoctorResponse {
    
    user : UserResponse;
    position : string;
    years_of_experience : number;
    introduce : string;
    location : LocationResponse;

    constructor(data : any) {
        this.user = data.user;
        this.position = data.position;
        this.years_of_experience = data.years_of_experience;
        this.introduce = data.introduce;
        this.location = data.location;
    }
}