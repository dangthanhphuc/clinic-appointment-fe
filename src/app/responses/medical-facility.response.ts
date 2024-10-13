import { MedicalFacilityType } from "../enums/facility-type";
import { CategoryResponse } from "./category.response";

export class MedicalFacilityResponse {
    id : number;
    name : string;
    type : MedicalFacilityType;

    constructor(data : any) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
    }
}