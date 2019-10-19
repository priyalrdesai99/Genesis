import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { IPlans } from 'src/IPlans';
import { IComponent } from './IComponent';


export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ComponentService {

 
private _url :string = "http://localhost:8000/component"

constructor(private http: HttpClient) {   
}

getComponents():Observable<IComponent[]> {
  return this.http.get<IComponent[]>(this._url);
}


getComponentWithType(type:string):Observable<any> {
  return this.http.get<HttpResponse<any>>(this._url + "/" + type,httpOptions)    
}

}