import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { IPlans } from 'src/IPlans';


export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PlanService {

 
private _url :string = "http://localhost:8000/plan"

constructor(private http: HttpClient) {   
}

getPlans():Observable<IPlans[]> {
  return this.http.get<IPlans[]>(this._url);
}


getPlanWithId(_id : number):Observable<any> {
  return this.http.get<HttpResponse<any>>(this._url + "/" + _id,httpOptions)    
}

}