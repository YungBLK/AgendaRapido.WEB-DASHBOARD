import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { baseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends baseService<any>{

  constructor(public http: HttpService) {
    super('category', http);
   }
 
  
  
 
}
