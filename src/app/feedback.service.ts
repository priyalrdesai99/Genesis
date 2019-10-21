
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { IFeedback } from 'src/IFeedback';


export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 
private _url :string = "http://localhost:8000/feedback"

constructor(private http: HttpClient) {   
}

getFeed():Observable<IFeedback[]> {
  return this.http.get<IFeedback[]>(this._url);
}


getFeedWithUser(user_id : number):Observable<any> {
  return this.http.get<HttpResponse<any>>(this._url + "/" + user_id,httpOptions);    
}

getFeedWithId(user_id : number,_id:number):Observable<any> {
  return this.http.get<HttpResponse<any>>(this._url + "/" + user_id+ "/" + _id,httpOptions);    
}
    


deleteFeed(Id : number):Observable<any> {
  return this.http.delete <any>(this._url + "/" + Id);      
}

postFeed(Feed : IFeedback):Observable<any> {
  return this.http.post <any>(this._url,Feed, httpOptions);      
}

}