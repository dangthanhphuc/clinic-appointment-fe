import { FacilityResponse } from "./facility.response";

export class LocationResponse {
    id : number;
    name : string;
    email : string;
    address : string;
    img_url : string;
    phone_number : string;
    description : string;
    facility : FacilityResponse;

    constructor(data : any) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.img_url = data.img_url;
        this.phone_number = data.phone_number;
        this.description = data.description;
        this.facility = data.facility;
    }

}