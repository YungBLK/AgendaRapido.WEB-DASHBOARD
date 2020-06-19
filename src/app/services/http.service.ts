import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { iHttpResults } from '../interfaces/iHttpResults';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService) {

  }

  public createHeaders(header?: HttpHeaders): HttpHeaders {
    if(!header){
      header = new HttpHeaders();
      header = header.append('Content-Type', 'application/json');
      header = header.append('Accept', 'application/json');


      let token = '';

      if(token){
        header = header.append('x-token-acess', token);

      }
      return header;
    }
  }
  public get(url: string): Promise<iHttpResults>{

    const header = this.createHeaders();
    return new Promise(async (resolve) => {
     try{
      this.spinner.show();
      const res = await this.http.get(url, {headers: header }).toPromise();
      resolve({ success: true, data: res, error: undefined })
      this.spinner.hide();
    }catch(error){
      this.spinner.hide();
      resolve({ success: false, data: undefined, error })

     }
    })
  }

  public post(url:string, model: any): Promise<iHttpResults>{
    let header = this.createHeaders();
    return new Promise(async (resolve) =>{
     try{
      this.spinner.show();
      const res = await this.http.post(url, model, {headers: header });
      resolve({ success: true, data: res, error: undefined })
      this.spinner.hide();
    }catch(error){
      this.spinner.hide();
      resolve({ success: false, data:{}, error })

     }
    })
  }

  public delete(url:string): Promise<iHttpResults>{
    let header = this.createHeaders();
    return new Promise(async (resolve) =>{
     try{
      this.spinner.show();
      const res = await this.http.delete(url, {headers: header });
      resolve({ success: true, data: res, error: undefined })
      this.spinner.hide();
    }catch(error){
      this.spinner.hide();
      resolve({ success: false, data:{}, error })
     }
    })
  }

}
