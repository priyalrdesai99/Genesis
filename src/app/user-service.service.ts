import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


interface IEmployee{
  _id: Number;
  name: string;
    Password: string;
    email:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _url :string = "http://localhost:8000/emp"

  constructor(private http: HttpClient) {   
  }

  getEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
  }

  getEmpWithId(empId : number):Observable<any> {
    return this.http.get<HttpResponse<any>>(this._url + "/" + empId, {observe:'response'})    
  }
  postEmployee(emp : IEmployee):Observable<any> {
    return this.http.post <any>(this._url,emp, httpOptions)      
  }

  putEmployee(emp : IEmployee):Observable<any> {
    return this.http.put <any>(this._url,emp, httpOptions)      
  }

  deleteEmployee(empId : number):Observable<any> {
    return this.http.delete <any>(this._url + "/" + empId)      
  }
}
