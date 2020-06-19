import { environment } from './../../environments/environment';
import { HttpService } from "../services/http.service";
import { iHttpResults } from "../interfaces/iHttpResults";

export abstract class baseService<T>{
 
        urlBase = '';

    constructor(
        public url: string,
        public http: HttpService
        ){
            this.urlBase = `${environment.url_api}/${this.url}`
        } 

        public getAll(): Promise <iHttpResults>{
            return this.http.get(this.urlBase);
        }
        public getById(uid:string): Promise <iHttpResults>{
            return this.http.get(`${this.urlBase}/${uid}`);
        }
        public post(model:T): Promise <iHttpResults>{
            return this.http.post(this.urlBase, model);
        }

        public delete(uid:string): Promise <iHttpResults>{
            return this.http.delete(`${this.urlBase}/${uid}`);
        }
}