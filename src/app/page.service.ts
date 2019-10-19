import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { IPlans } from 'src/IPlans';
import { IPage } from 'src/IPage';


export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PageService {

 
private _url :string = "http://localhost:8000/page"

constructor(private http: HttpClient) {   
}

getPages():Observable<IPage[]> {
  return this.http.get<IPage[]>(this._url);
}


getPageUserId(user_id : number):Observable<any> {
  return this.http.get<HttpResponse<any>>(this._url + "/" + user_id,httpOptions);    
}

getPageWithId(user_id : number,_id:number):Observable<any> {
  return this.http.get<HttpResponse<any>>(this._url + "/" + user_id+ "/" + _id,httpOptions);    
}
    

putPage(page : IPage):Observable<any> {
  return this.http.put <any>(this._url,page, httpOptions)      
}

}