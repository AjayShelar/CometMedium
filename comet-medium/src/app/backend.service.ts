import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";
import { catchError } from "rxjs/internal/operators/catchError";
import { StateService } from './state.service';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  options = {
    headers: {
      Authorization: "Token " + this.state.getToken()
    }
  };
  constructor(private httpClient: HttpClient, private state: StateService) { }


  getAllPosts(): Observable<any> {
    return this.httpClient.get<any[]>(environment.url + "medium/api/v1/post/", {
      headers: this.options.headers,
    });
  }
  login(username: string, password: string): Observable<boolean> {
    return this.httpClient
      .post(environment.url + "rest-auth/login/", {
        username: username,
        password: password
      })
      .pipe(
        map(data => {
          console.log(data);
          if ("key" in data) {
            this.state.setData(data);
            this.options = {
              headers: {
                Authorization: "Token " + this.state.getToken()
              }
            };
            return true;
          }
          return false;
        })
      );
  }
}
