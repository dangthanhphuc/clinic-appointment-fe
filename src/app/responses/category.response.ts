export class CategoryResponse {

    id : number;
    name : string;

    constructor(data : any){
        this.id = data.id;
        this.name = data.name;
    }
    
}