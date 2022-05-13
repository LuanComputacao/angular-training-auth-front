import { Injectable } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  public signIn(payload: {email: string, password: string}): Observable<any>{
    return this.http.post(`${this.url}/signin`, payload)
      .pipe(
        map((data) => {
          return console.log(data)
        }),
        catchError((err) => {
          console.log(err)
          return throwError(() => err)
        })
      )
  }
}
