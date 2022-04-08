import { InMemoryDbService } from "angular-in-memory-web-api";

export class testData implements InMemoryDbService{
    createDb(){
        let book = [
            { 
                id:101,
                name :'Admin', 
                email:'admin@gmail.com',
                contact:'867214782178',
                status:'aksfn'
            },
            
        ]
        return{book:book};
    }
}