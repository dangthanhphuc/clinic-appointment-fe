import { FacilityType } from "../enums/facility-type";
import { CategoryResponse } from "./category.response";

export class FacilityResponse {
    id : number;
    name : string;
    type : FacilityType;
    category : CategoryResponse;

    constructor(data : any) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.category = data.category;
    }
}