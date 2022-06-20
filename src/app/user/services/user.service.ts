import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap, first, Observable } from 'rxjs';

import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  //chamada da API
  public readonly API = '/users'; //'http://localhost:8080/users';

   //chamada AJAX para API Java(injeção de dependencia)
  constructor(private httpClient: HttpClient) { }



  list_users(): Observable <any> {
    return this.httpClient.get("http://localhost:8080/users");

  }

  list(){
    return this.httpClient.get<User[]>(this.API).pipe(
      first(),
      delay(1000),
      tap(user => console.log(user))
    )
  }

  list_id(){
    return this.httpClient.get<User >(this.API, ).pipe(
      first()

    )

  }

}
