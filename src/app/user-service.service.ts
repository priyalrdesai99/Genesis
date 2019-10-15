import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFUser } from 'src/IFUser';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _url :string = "http://localhost:8000/user"

  constructor(private http: HttpClient) {   
  }

  getUsers():Observable<IFUser[]> {
    return this.http.get<IFUser[]>(this._url)
  }

  getUserWithId(userId : number):Observable<any> {
    return this.http.get<HttpResponse<any>>(this._url + "/" + userId, {observe:'response'})    
  }
  postUser(user : IFUser):Observable<any> {
    return this.http.post <any>(this._url,user, httpOptions)      
  }

  putUser(user : IFUser):Observable<any> {
    return this.http.put <any>(this._url,user, httpOptions)      
  }

  deleteUser(userId : number):Observable<any> {
    return this.http.delete <any>(this._url + "/" + userId)      
  }
}
