import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ilogin } from './login';
import { Observable, of } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
//import login from "../assets/data/fakeDataBase";

@Injectable()
export class ApiService {

  //This is just for testing
  private _url: string = "/assets/data/fakeDataBase.json";

  constructor(private httpC: HttpClient) { }
  getData(): Observable<Ilogin[]>{
    
    /*const loginInfo = JSON.parse(JSON.stringify(login)) as Ilogin[];
    return of(login);
    */
    return this.httpC.get<Ilogin[]>(this._url);
  }

  sendData(log: Ilogin[]): Observable<any>{
      return this.httpC.post(this._url, log, {
        headers: new HttpHeaders({
            'Authorization': 'Bearer some_key'
        })
      });
  }


}
